import type { Context } from "hono";
import bcrypt from "bcrypt";
import { sign } from "hono/jwt";
import { deleteCookie, setCookie } from "hono/cookie";

import {
  compareToken,
  generateResetToken,
  hashToken,
} from "../utils/resetToken.js";
import { sendResetEmail } from "../utils/email.js";
import { pool } from "../../db/db.js";

/**
 * Sign Up Route
 * /auth/sign-up
 * Public Route
 */
export const signUp = async (c: Context) => {
  try {
    const { fullName, email, password } = await c.req.json();

    if (!fullName || !email || !password) {
      return c.json(
        { error: "Full name, email and password are required" },
        400,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await pool.query(
      `
      INSERT INTO users (full_name, email, password) VALUES 
      ($1, $2, $3)
      RETURNING id
    `,
      [fullName, email, hashedPassword],
    );

    return c.json(result.rows[0], 201);
  } catch (err: any) {
    console.error(err);

    if (err.code === "23505") {
      return c.json({ error: "Email already exists" }, 409);
    }

    return c.json({ error: "Internal Server Error" }, 500);
  }
};

/**
 * Sign In Route
 * /auth/sign-in
 * Public Route
 */
const JWT_SECRET = process.env.JWT_SECRET || "super-secret";
export const signIn = async (c: Context) => {
  const { email, password } = await c.req.json();

  if (!email || !password) {
    return c.json({ error: "Email and password are required" }, 400);
  }

  const result = await pool.query(
    `
    SELECT id, full_name, email, password
    FROM users
    WHERE email = $1
    `,
    [email],
  );

  const user = result.rows[0];

  if (!user) {
    return c.json({ error: "Invalid credentials" }, 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return c.json({ error: "Invalid credentials" }, 401);
  }

  const token = await sign(
    {
      sub: user.id,
      email: user.email,
      exp: Math.floor(Date.now() / 1000 + 60 * 60 * 42),
    },
    JWT_SECRET,
  );

  setCookie(c, "auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return c.json({ message: "Logged in" });
};

type UserPayload = {
  sub: number;
  email: string;
};

/**
 * Sign Out Route
 * /auth/sign-out
 * Public Route
 */
export const signOut = (c: Context) => {
  deleteCookie(c, "auth_token", {
    path: "/",
  });

  return c.json({ message: "Logged out" });
};

export const forgotPassword = async (c: Context) => {
  const { email } = await c.req.json();

  const result = await pool.query(
    `
    SELECT id, full_name, email, password
    FROM users
    WHERE email = $1
    `,
    [email],
  );

  const user = result.rows[0];

  if (!user) {
    return c.json({
      message: "If that email exists, a reset link has been sent",
    });
  }

  const rawToken = generateResetToken();
  const hashedToken = await hashToken(rawToken);

  await pool.query("DELETE FROM password_resets WHERE user_id = $1", [user.id]);

  await pool.query(
    `
    INSERT INTO password_resets (user_id, token, expires_at)
    VALUES ($1, $2, $3)  
  `,
    [
      user.id,
      hashedToken,
      new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
    ],
  );

  const resetLink = `${process.env.FRONTEND_URL}/auth/reset-password?token=${rawToken}`;

  await sendResetEmail(user.email, resetLink);

  return c.json({
    message: "If that email exists, a reset link has been sent",
  });
};

/**
 * Me route
 * /auth/me
 * Private Route
 */
export const getMe = async (c: Context) => {
  const user = c.get("user") as UserPayload;

  if (!user?.sub) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const result = await pool.query(
    `
    SELECT
      id,
      full_name AS "fullName",
      email
    FROM users
    WHERE id = $1  
  `,
    [user.sub],
  );

  const dbUser = result.rows[0];

  if (!dbUser) {
    return c.json({ error: "User not found" }, 404);
  }

  return c.json({ user: dbUser });
};
