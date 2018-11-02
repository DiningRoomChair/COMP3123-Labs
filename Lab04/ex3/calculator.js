exports.addTwoNumbers = function(x, y){
    if(isNaN(x + y)){
        throw Error("Add failed.");
    }
    return x + y;
}

exports.subtractTwoNumbers = function(x, y){
    if(isNaN(x - y)){
        throw Error("Subtract failed.");
    }
    return x - y;
}