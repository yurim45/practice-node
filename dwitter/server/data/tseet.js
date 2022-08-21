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

export async function getAll() {
  return TWEETS;
}

export async function getAllByUsername(username) {
  return TWEETS.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return TWEETS.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const newTweet = {
    id: Date.now().toString(),
    name,
    username,
    text,
    createdAt: new Date(),
  };
  TWEETS = [newTweet, ...TWEETS];
  return TWEETS;
}

export async function update(id, text) {
  const tweet = TWEETS.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function deleteById(id) {
  TWEETS = TWEETS.filter((tweet) => tweet.id !== id);
}
