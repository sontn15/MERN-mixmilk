import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';

// @des Fetch all blog posts
// @route GET /api/blogs
// @access Public
const getBlogs = asyncHandler(async (req, res) => {
  const pageSize = 1;
  const page = Number(req.query.pageNumber) || 1;

  // const blogs = await Blog.find({}).sort({ createdAt: -1 });

  const count = await Blog.countDocuments({});

  const blogs = await Blog.find({})
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ blogs, page, pages: Math.ceil(count / pageSize) });
  // res.json(blogs);
});

// @des Fetch single blog
// @route GET /api/blog/:id
// @access Public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error('Không tìm thấy bài viết!');
  }
});

// @des Delete a blog
// @route DELETE /api/blog/:id
// @access Private/Admin
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.remove();
    res.json({ message: 'Đã xóa bài viết!' });
  } else {
    res.status(404);
    throw new Error('Không tìm thấy bài viết');
  }
});

// @des Create a blog
// @route POST /api/blog/
// @access Private/Admin
const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    title: 'Sample name',
    subTitle: 'Sample subtitle',
    user: req.user._id,
    image: '/images/sample.jpg',
    body: 'Sample body',
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// @des Update a blog
// @route PUT /api/blog/:id
// @access Private/Admin
const updateBlog = asyncHandler(async (req, res) => {
  const { title, subtitle, image, body } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.subTitle = subtitle;
    blog.image = image;
    blog.body = body;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error('Không tìm thấy bài viết');
  }
});

export { getBlogs, getBlogById, deleteBlog, createBlog, updateBlog };
