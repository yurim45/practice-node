import * as tweetRepo from '../data/tseet/tweet.js';

export async function getTweets(req, res) {
  const username = req.query.username;
  const data = await (username
    ? tweetRepo.getAllByUsername(username)
    : tweetRepo.getAll());
  res.status(200).json(data);
}

export async function getTweet(req, res) {
  const id = req.params.id;
  const data = await tweetRepo.getById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet id: ${id} not Found` });
  }
}

export async function createTweet(req, res) {
  const { text, name, username } = req.body;
  const tweet = await tweetRepo.create(text, name, username);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res, next) {
  const id = req.params.id;
  const { text } = req.body;

  const tweet = await tweetRepo.update(id, text);
  if (tweet) {
    tweet.text = text;
    res.status(201).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id: ${id} not Found` });
  }
}

export async function deleteTweet(req, res, next) {
  const id = req.params.id;
  await tweetRepo.deleteById(id);
  res.status(204);
}
