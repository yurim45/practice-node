import express from 'express';
import 'express-async-errors';

let TWEETS = [
  {
    id: '1',
    name: 'April',
    username: 'april',
    text: 'hello!',
    createdAt: Date.now().toString(),
    url: '',
  },
  {
    id: '2',
    name: 'Ving9',
    username: 'ving9',
    text: 'ving9999999999!',
    createdAt: Date.now().toString(),
    url: '',
  },
];

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? TWEETS.filter((tweet) => tweet.username === username)
    : TWEETS;
  res.status(200).json(data);
});

// GET /tweet/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = TWEETS.find((tweet) => tweet.id === id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet id: ${id} not Found` });
  }
});

// POST /tweets
router.post('/', (req, res, next) => {
  const { text, name, username } = req.body;
  const newTweet = {
    id: Date.now().toString(),
    name,
    username,
    text,
    createdAt: new Date(),
  };
  TWEETS = [newTweet, ...TWEETS];
  res.status(201).json(newTweet);
});

// PUT /tweet/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const { text } = req.body;

  const tweet = TWEETS.find((tweet) => tweet.id === id);
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
  TWEETS = TWEETS.filter((tweet) => tweet.id !== id);
  res.status(204);
});

export default router;
