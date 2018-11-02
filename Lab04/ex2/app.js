const say = require('say');

say.speak('Hello!');
say.stop();

say.speak("Hello?", "Alex", 0.5);
say.stop();

var callbackFunc = function(name){
    say.speak('I\'m sorry, ' + name);
}

setTimeout(callbackFunc, 5000, 'Dave');