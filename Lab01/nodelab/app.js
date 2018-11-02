//Hello world JavaScript refresher

console.log('Hello World!');

var greet = function(){
    console.log('Hello World...');
}
greet();

//Exercise 1 - Log Hello World 10 times

for(var i = 0; i < 10; i++){
    console.log('Hello World');
}

//Exercise 2

var getCurrentDateAndTime = function getCurrentDateAndTime(){
    return new Date();
}
for(var i = 0; i < 10; i++){
    console.log('Hello World at ' + getCurrentDateAndTime());
}

//Exercise 3

var getCurrentDateAndTime = function getCurrentDateAndTime(){
    var currDate = new Date();
    return [currDate.toLocaleDateString(), currDate.toLocaleTimeString()];
}
console.log("Current Date: " + getCurrentDateAndTime()[0] + " Current Time: " + getCurrentDateAndTime()[1]);

//Exercise 4

var moment = require('moment');

var greet = function(){
    var wrapped = moment(new Date());
    console.log(wrapped);
}
greet();
