import { Router } from "express";
import auth from "../middleware/authMiddleware.js";
import { createBlog, getAllBlogs, getBlogsByUser } from "../controllers/blogController.js";
import upload from "../utils/upload.js";

const router = Router();

router.post("/create",auth, upload.single('blogImage'), createBlog);
router.get("/getAll", getAllBlogs);
router.get("/getByUser", auth, getBlogsByUser);

export default router;