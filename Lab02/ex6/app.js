const http = require('http');
const url = require('url');

var events = require('events');
class MyEmitter extends events{}
var myEmitter = new MyEmitter();

myEmitter.on("jackpot", function(){
    console.log("JACKPOT!!!");
});

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Slot Machine\n');

  var thisURL = new URL(req.url, `http://${hostname}:${port}/`);



  if(thisURL.pathname == "/play" || thisURL.pathname == "/play/"){
    if(typeof thisURL.searchParams.get('amount') !== 'undefined'){
        var queryAmount = thisURL.searchParams.get('amount');
        this.amount = queryAmount;
        console.log("playing... amount: " + queryAmount);
    }
    else{
        console.log("playing...");
    }
  }
  else if(thisURL.pathname == "/spin" || thisURL.pathname == "/spin/"){
    console.log("spinning...");
    if(this.amount == 'max'){
        myEmitter.emit("jackpot");
    }
    else{
        console.log("lost " + this.amount);
    }
  }
  else{
      console.log(thisURL.pathname + " is not a command. Please play or spin.")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});