import express from 'express';
import { Reddit, readRedditCategory } from '../controllers/reddit';

const router = express.Router();

const reddit = new Reddit('');

// Set up the category parameter for this route
router.param('category', (req, res, next, category) => {
  req.category = category;
  next();
});

// GET reddit index
router.get('/', reddit.getRedditContent);
router.get('/:category', reddit.getRedditContent);

export default router;
