const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Slot Machine\n');
  
  switch(req.url){
    case "/play":
      console.log("playing...");
      break;
    case "/play/":
      console.log("playing...");
      break;
    case "/spin":
      console.log("spinning...");
      break;
    case "/spin/":
      console.log("spinning...");
      break;
    default:
      console.log(req.url + " is not a command. Please play or spin")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

