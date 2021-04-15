import express from 'express';
const router = express.Router();
import { getBlogs } from '../controllers/blogController.js';

router.route('/').get(getBlogs);

export default router;
