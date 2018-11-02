var events = require('events');

class MyEmitter extends events{}
var myEmitter = new MyEmitter();

var alarmTrigger = function(){
    console.log('Alarm has been triggered!');
}
var callEMS = function(){
    console.log('Call 911!');
}

myEmitter
    .on('alarm', alarmTrigger)
    .on('alarm', callEMS)
myEmitter.emit('alarm');