import { Router } from "express";
import auth from "../middleware/authMiddleware.js";
import { createCategory, getAllCategories } from "../controllers/categoryController.js";

const router = Router();

router.post("/create",auth, createCategory);
router.get("/getAll", auth, getAllCategories);

export default router;