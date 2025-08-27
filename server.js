// server.js

const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  console.log('Received a request!');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from OpenShift!\n');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});