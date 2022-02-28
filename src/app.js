import express from "express";
import cors from "cors";

import morgan from "morgan";
import TimeRouter from "./routes/time.routes";

const app = express();

//Settings
app.use(morgan("dev"));
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/time", TimeRouter);

export default app;
