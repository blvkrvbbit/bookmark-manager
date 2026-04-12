import { Hono } from "hono";
import { signIn, signUp } from "../controllers/auth.js";

const authRoutes = new Hono();

authRoutes.post("/sign-up", signUp);
authRoutes.post("/sign-in", signIn);
export default authRoutes;
