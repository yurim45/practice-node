import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

const corsOptions = {
  origin: ['http://atnp.localhost:3000/'],
  optionsSuccessStatus: 200,
  credentials: true, //Access-Control-Allow-Credentials: true
};

// 유용한 미들웨어
app.use(express.json()); // body가 undifinded 로 되는것을 해결
app.use(cookieParser()); // cookie undifinded 로 되는것을 해결
app.use(morgan('combined')); // 사용자에게 요청받은 것을 로그로 남기고 싶을 때, format은 combined으로
app.use(helmet()); // 공통적으로 보안에 필요한 헤더 요소를 추가
app.use(cors(corsOptions)); // 헤더를 정확히 알고 있어야 하고, 오타가 있을 경우, 매번 설정할 경우 번거롭기 때문에 미들웨어 사용 ➔ npm i cors

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // CORS 문제 해결을 위한 코드
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, DELETE'
//   );
//   next();
// });

// npm i cookie-parser morgan helmet
app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send('Welcome!');
});

app.listen(8080);
