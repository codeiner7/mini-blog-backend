import Blog from "../models/blog.js";
import { uploadImageToCloudinary } from "../utils/cloudinaryUploader.js";

const uploadImage = async (file) => {
  try {
    const filePath = file.path;
    const uploadResult = await uploadImageToCloudinary(filePath, 'Blog');
    return uploadResult;
  } catch (error) {
    console.error('Image upload failed:', error);
    throw new Error('Image upload failed');
  }
};

export async function createBlog(req, res) {
  try {
    const { title, categoryId, content } = req.body;
    let uploadResult = null;

    if (req.file) {
      uploadResult = await uploadImage(req.file);
    }

    const newBlog = await Blog.create({
      title,
      category_name: categoryId,
      content,
      author: req?.user?.id,
      blog_image_url: uploadResult.url,
    });

    res.status(201).json({ message: "Blog posted successfully", blog: newBlog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getAllBlogs(req, res) {
  try {
    const blogs = await Blog.find().populate(['category_name', 'author']);
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getBlogsByUser(req, res) {
    try {
      const blogs = await Blog.find({author: req?.user?.id}).populate(['category_name', 'author']);
      res.json(blogs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }