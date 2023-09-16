const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    console.log(path.resolve(__dirname, 'index.html'));
    fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });

    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: `Hello World with ${req.method} at ${req.url}!`,
    })
  );
});

server.listen(9000);
