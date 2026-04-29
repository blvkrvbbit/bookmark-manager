import { Hono } from "hono";

import { getMe, signIn, signUp } from "../controllers/auth.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRoutes = new Hono();

authRoutes.post("/sign-up", signUp);
authRoutes.post("/sign-in", signIn);
authRoutes.get("/me", authMiddleware, getMe);
export default authRoutes;
