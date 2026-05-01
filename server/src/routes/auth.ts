import { Hono } from "hono";

import {
  forgotPassword,
  getMe,
  signIn,
  signOut,
  signUp,
} from "../controllers/auth.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRoutes = new Hono();

authRoutes.post("/sign-up", signUp);
authRoutes.post("/sign-in", signIn);
authRoutes.post("/sign-out", signOut);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.get("/me", authMiddleware, getMe);
export default authRoutes;
