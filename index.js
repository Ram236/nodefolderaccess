const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // const logo = fs.readFileSync(path.resolve(__dirname, 'C:/Users/manik/OneDrive/Desktop/hi.txt'));    
    // console.log(logo)
    // console.log(path.resolve(__dirname, 'C:/Users/manik/OneDrive/Desktop/hi.txt'));
   
    filePath = path.resolve(__dirname, 'C:/Users/manik/OneDrive/Desktop/hi.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    } else {
        console.log(err);
    }
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
