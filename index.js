import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

config();
connectDB();

const app = express();
app.use(json());
app.use(cors({
  origin: "https://mini-blog-frontend-six.vercel.app",
    methods: ["GET", "POST"],
}));

app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/blog", blogRoutes);

app.get('/', (req, res) => {
  res.json('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));