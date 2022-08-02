import express from 'express';

const app = express();

app.use(express.json());

// 체이닝이 가능
// 다만 복잡한 서버의 경우 여러 경로가 존재하기 때문에 app.js 에서 전부 나열하는 것은
// 1. 가독성이 떨어지고
// 2. 모듈성이 떨어지고
// 3. 유지보수가 어렵다

app
  .route('/posts')
  .get((req, res) => {
    res.status(201).send('GET: /posts');
  })
  .post((req, res) => {
    res.status(201).send('POST: /posts');
  });

app
  .route('/posts/:id')
  .put((req, res) => {
    res.status(201).send('PUT: /posts/:id');
  })
  .delete((req, res) => {
    res.status(201).send('DELETE: /posts/:id');
  });

app.listen(8080);
