import express from 'express';

const app = express();

// https://expressjs.com/en/4x/api.html

// app.get('/sky/:id', (req, res, next) => {
//   // console.log(req.path);
//   // console.log(req.headers);
//   console.log(req.params);
//   console.log(req.query);

//   res.setHeader('key', 'value');
//   // res.send('hi');
//   // res.json({ name: 'april' });
//   // res.statusCode(400);
//   res.status(201).send('created');
// });

app.post('/', (req, res, next) => {
  console.log(req.body);
});

app.get(
  '/',
  (req, res, next) => {
    console.log('first');
  },
  (req, res, next) => {
    console.log('first2');
  }
);

app.get('/', (req, res, next) => {
  console.log('second');
});

app.listen(8000);
