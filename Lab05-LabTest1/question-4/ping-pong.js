var events = require('events');
var moment = require('moment');

class MyEmitter extends events{}
var myEmitter = new MyEmitter();

var ping = function(count = 0){
    if(count < 16){
        console.log("Ping!-- Count: " + count + "--Time" + moment(new Date()).format("hh:mm:ss"));
        count++;
        setTimeout(pong, 1000, count)
    }
    else{
        console.log("Game Over!");
    }
}
var pong = function(count = 0){
    if(count < 16){
        console.log("Pong!-- Count: " + count + "--Time" + moment(new Date()).format("hh:mm:ss"));
        count++;
        setTimeout(ping, 1000, count)
    }
    else{
        console.log("Game Over!");
    }
}

myEmitter
    .on("Ping", ping)
    .on("Pong", pong)
myEmitter.emit("Ping");