import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tseet/tweet.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';

const router = express.Router();
const validateTweet = [
  body('text').trim().isLength({ min: 3 }).withMessage('3글자 이상 입력하세요'),
  validate,
];

// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);

// GET /tweet/:id
router.get('/:id', tweetController.getTweet);

// POST /tweets
router.post('/', validateTweet, tweetController.createTweet);

// PUT /tweet/:id
router.put('/:id', validateTweet, tweetController.updateTweet);

// DELETE /tweet/id
router.delete('/:id', tweetController.deleteTweet);

export default router;
