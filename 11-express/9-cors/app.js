import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // CORS 문제 해결을 위한 코드
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, DELETE'
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8080);
