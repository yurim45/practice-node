import express from 'express';
import cors from 'cors';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // CORS 문제 해결을 위한 코드
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, DELETE'
  );
  next();
});

// 헤더를 정확히 알고 있어야 하고, 오타가 있을 경우, 매번 설정할 경우 번거롭기 때문에 미들웨어 사용 ➔ npm i cors
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8080);
