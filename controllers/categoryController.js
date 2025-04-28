import Category from "../models/category.js";

export async function createCategory(req, res) {
    try {
      const { name } = req.body;
  
      const newCategory = await Category.create({
        name
      });
  
      res.status(201).json({ message: "Category created successfully" });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }

  export async function getAllCategories(req, res) {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "Server error" });
    }
  }