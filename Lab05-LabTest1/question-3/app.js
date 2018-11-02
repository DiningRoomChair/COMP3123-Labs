var os = require("os");
var index = require("./osinfo/index")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  if(req.url == "/"){
    res.writeHead(200, { 'Content-Type': 'application/json'});
    var m = 'No data found'
    res.end(JSON.stringify(m));
  }
  else if(req.url == "/api/systeminfo"){
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(index.systeminfo.getSystemInfo()));
  }
  else if(req.url == "/api/userinfo"){
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(index.systeminfo.getUserInfo()));
  }
  else if(req.url == "/api/firewall"){
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(index.firewall.getStatuses()));
  }
  else{
    res.writeHead(404, { 'Content-Type': 'application/json'});
    var e = "404 Not Found";
    res.end(JSON.stringify(e));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
