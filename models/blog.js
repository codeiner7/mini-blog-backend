import mongoose, {Schema} from "mongoose";

const blogSchema = new Schema({
    title: { type: String, required: true },
    blog_image_url: { type: String, required: true },
    category_name: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;