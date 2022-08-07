// npm i express cors helmet morgan express-async-errors
// npm i nodemon --save-dev

// "Express Callback": {
//   "prefix": "rr",
//   "body": [
//     "(req, res, next) => {$1}"
//   ],
//   "description": "Express Callback"
// }

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRoute);

// 존재하지 않는 url 접속 시 처리
app.use((req, res, next) => {
  res.sendStatus(404);
});

// error 처리
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
