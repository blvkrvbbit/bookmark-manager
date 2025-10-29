// routes/auth.ts
import { Router, Request, Response } from "express";
import prisma from "../db";
import bcrypt from "bcrypt";

const router = Router();

/**
 * POST /api/auth/login
 * Body: { name: string, email: string, password: string }
 */
router.post("/sign-up", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

/**
 * POST /api/auth/login
 * Body: { email: string, password: string }
 */
router.post("/sign-in", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // TODO: Create a jwt token, and store it in a cookie
    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
