// npm i jsonwebtoken
// https://jwt.io/
const jwt = require('jsonwebtoken');

const secret = 'fSTWh2471^%Vw9dmUyYR$BXL*VJhq&N&';
const token = jwt.sign(
  {
    id: 'april',
    isAdmin: false,
  },
  secret,
  { expiresIn: 2 }
);

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);

console.log(token);
