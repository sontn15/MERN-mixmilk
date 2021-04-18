import express from 'express';
const router = express.Router();
import {
  getBlogs,
  getBlogById,
  deleteBlog,
  createBlog,
  updateBlog,
} from '../controllers/blogController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getBlogs).post(protect, admin, createBlog);
router
  .route('/:id')
  .get(getBlogById)
  .delete(protect, admin, deleteBlog)
  .put(protect, admin, updateBlog);

export default router;
