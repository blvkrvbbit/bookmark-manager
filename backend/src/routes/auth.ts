import { Hono } from "hono";
import {
  forgotPassword,
  resetPassword,
  signIn,
  signUp,
} from "../controllers/auth.js";

const authRoutes = new Hono();

authRoutes.post("/sign-up", signUp);
authRoutes.post("/sign-in", signIn);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password", resetPassword);
export default authRoutes;
