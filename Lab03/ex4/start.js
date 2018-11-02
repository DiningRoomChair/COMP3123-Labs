var handleCounter = function(result){
    console.log('The callback count is ' + result);
}

var callbackLoop = function(count, func){
    for(let i=1; i<=count; i++){
        func(i);
    }
    console.log('*** exiting callbackLoop ***');
}

callbackLoop(5, handleCounter);
callbackLoop(2, handleCounter);
callbackLoop(7, handleCounter);