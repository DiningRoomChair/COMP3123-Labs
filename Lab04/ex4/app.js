const http = require('http');

var books = require('./store/books');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  if(req.url == "/api/favoritebook"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    console.log('favbook');
    res.write(JSON.stringify(books.favoriteBook()));
  }
  if(req.url == "/api/getbooks"){
    console.log('Gottem');
    res.write(JSON.stringify(books.getBookRecommendations()))
  }
  else{
    res.writeHead(404, "ERROR", {
      'Content-type': 'application/json',
    })
    var e = "ERROR";
    res.write(JSON.stringify(e));
  }

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
