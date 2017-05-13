import express from 'express';
import home from './home';
import subreddit from './subreddit';

const router = express.Router();

// Configure the API router
router.use('/', home);
router.use('/subreddit', subreddit);

export default router;