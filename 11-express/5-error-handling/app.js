import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

// 모든 request에 express에서 제공하는 json을 사용
app.use(express.json());

// 비동기 처리를 할땐 에러 처리를 콜백함수 내부에서 처리를 해야한다.
// 그렇지 않으면 에러 힌들링 되지 않는다..
app.get('/file1', (req, res) => {
  // 1. readFile: 비동기
  // fs.readFile('/file1.txt', (err, data) => {
  //   if (err) {
  //     res.sendStatus(404);
  //   }
  // });

  // 2. readFileSync: 동기
  try {
    const data = fs.readFileSync('/file1.txt');
  } catch (error) {
    res.sendStatus(404).send('File not found');
  }
});

// fsAsync: Promise 비동기

// 비동기는 try/catch 문으로 에러를 잡을 수 없다.
// 내부적으로 에러가 발생했기 때문에!!
// 항상 .catch로 에러 핸들링을 해야한다.
app.get('/file2', (req, res, next) => {
  // 에러를 잡아서 미들웨어로 전달
  // fsAsync.readFile('/file2.txt').catch((error) => next(error)); // === .catch(next);

  // 내부적으로 에러 핸들링
  fsAsync.readFile('/file2.txt').catch((error) => {
    res.sendStatus(404);
  });
});

// async/await 문
// async라는 키워드로 인해 함수 자체는 비동기 하수
// await를 했기 때문이 동기적인 코드이므로 try/catch 문으로 에러 핸들링 가능
app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
  } catch {
    res.sendStatus(404);
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
