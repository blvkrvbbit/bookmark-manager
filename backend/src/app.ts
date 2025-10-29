import express, { Application } from "express";
import cors from "cors";
import routes from "./routes";
import authRoutes from "./routes/auth";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);
app.use("/api/auth", authRoutes);

export default app;
