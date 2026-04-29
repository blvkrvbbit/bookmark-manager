import { verify } from "hono/jwt";
import { getCookie } from "hono/cookie";
import type { Context, Next } from "hono";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret";
export const authMiddleware = async (c: Context, next: Next) => {
  const token = getCookie(c, "auth_token");

  if (!token) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const payload = await verify(token, JWT_SECRET, "HS256");
    c.set("user", payload);
    await next();
  } catch {
    return c.json({ error: "Invalid token" }, 401);
  }
};
