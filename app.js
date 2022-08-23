const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Hello There');
});

server.listen(3000);

