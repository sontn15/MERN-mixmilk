import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';

// @des Fetch all blog posts
// @route GET /api/blogs
// @access Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

export { getBlogs };
