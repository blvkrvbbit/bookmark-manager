import { Hono } from "hono";
import { signUp } from "../controllers/auth.js";

const authRoutes = new Hono();

authRoutes.post("/sign-up", signUp);

export default authRoutes;
