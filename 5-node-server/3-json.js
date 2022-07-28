const http = require('http');

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Node' },
  { name: 'Frontend' },
];

const server = http.createServer((req, res) => {
  const url = req.url; // what? 클라이언트가 무엇을 원하는지
  const method = req.method; // how?, action? 어떤 메소드로 받아와서 어떤 액션을 받아올 것인지
  if (url === '/courses') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(courses));
    } else if (method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log(course);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080);
