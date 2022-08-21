import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tseet/tweet.js';

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);

// GET /tweet/:id
router.get('/:id', tweetController.getTweet);

// POST /tweets
router.post('/', tweetController.createTweet);

// PUT /tweet/:id
router.put('/:id', tweetController.updateTweet);

// DELETE /tweet/id
router.delete('/:id', tweetController.deleteTweet);

export default router;
