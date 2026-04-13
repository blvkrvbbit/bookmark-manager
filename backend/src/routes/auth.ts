import { Hono } from "hono";
import { forgotPassword, signIn, signUp } from "../controllers/auth.js";

const authRoutes = new Hono();

authRoutes.post("/sign-up", signUp);
authRoutes.post("/sign-in", signIn);
authRoutes.post("/forgot-password", forgotPassword);
export default authRoutes;
