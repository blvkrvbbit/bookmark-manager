import type { Context } from "hono";
import bcrypt from "bcrypt";
import { pool } from "../../db/db.js";

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
