import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import fs from 'fs';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

config();
connectDB();

const app = express();
app.use(json());
app.use(cors());


if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/blog", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));