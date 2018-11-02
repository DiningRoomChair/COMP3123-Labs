var max = 50;

// check for error and output message. If none,
// output callback counter, wait time, & timestamp
var handleCounter = function(err, counter, waitTime, timestamp){
    if(err){
        console.log(err.message);
    }
    else{
        console.log('Callback counter: ' + counter + ' Time: ' +
        waitTime + ' TimeStamp: ' + timestamp);
    }
}

var callbackWait = function(counter, callback){
    var waitTime = Math.floor(Math.random()*100);
    var timestamp = new Date();
    if(waitTime > max){
        var err = new Error('ERROR: WaitTime cannot be greater than Max Time');
        callback(err, 0, 0, 0);
    }
    else{
        setTimeout(callback, waitTime, null, counter, waitTime, timestamp);
    }
}

for(let i=0; i<10; i++){
    callbackWait(i, handleCounter);
}