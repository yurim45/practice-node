import express from 'express';

const app = express();

// express.json ➔ REST API, body parse
// express.urlencoded ➔ HTML form
// express.static

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //옵션 필수
app.use(express.static('public', options)); // public 폴더에 접근할 수 있다. http://localhost:8080/index.html

app.post('/posts', (req, res) => {
  console.log(req.body);
  res.status(201).send('Thanks, Created');
});

const options = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};

app.use(express.static('public', options));
app.listen(8080);
