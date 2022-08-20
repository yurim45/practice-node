import express from 'express';
import 'express-async-errors';
import * as tweetRepo from '../data/tseet/tweet.js';

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweetRepo.getAllByUsername(username)
    : tweetRepo.getAll();
  res.status(200).json(data);
});

// GET /tweet/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = tweetRepo.getById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet id: ${id} not Found` });
  }
});

// POST /tweets
router.post('/', (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = tweetRepo.create(text, name, username);
  res.status(201).json(newTweet);
});

// PUT /tweet/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const { text } = req.body;

  const tweet = tweetRepo.update(id, text);
  if (tweet) {
    tweet.text = text;
    res.status(201).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id: ${id} not Found` });
  }
});

// DELETE /tweet/id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweetRepo.deleteById(id);
  res.status(204);
});

export default router;
