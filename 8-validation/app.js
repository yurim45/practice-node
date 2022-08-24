import express from 'express';
import { body, param, validationResult } from 'express-validator'; // npm i express-validator

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  '/users',
  [
    body('name').trim().isLength({ min: 2 }).withMessage('이름은 두글자 이상!'), // trim() Sanitization을 위해 추가, 공백제거. 유성성 검사 전 실행하기 위해 맨 앞에 체이닝
    body('age').isInt().withMessage('숫자를 입력해'),
    body('email').isEmail().withMessage('이메일 입력해요').normalizeEmail(),
    body('job.name').notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  '/:email',
  [param('email').isEmail().withMessage('이메일 입력해요'), validate],
  (req, res, next) => {
    res.send('💌');
  }
);

app.listen(8080);
