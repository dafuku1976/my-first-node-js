'use strict';

const number = process.argv[2] || 0;
let sum = 0;
for(let i = 1; i = number; i++){
    sum = sum + i;
}
console.log(sum);


/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/