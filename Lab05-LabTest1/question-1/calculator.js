function multiplyTwoNumbers(x, y){
    if(!(Number.isInteger(x) && Number.isInteger(y))){
        throw new Error("Inputs must be integers.");
    }
    return x*y;
}

function evenDoubler(x){
    if(!Number.isInteger(x)){
        throw new Error("Input must be an integer.");
    }
    if(x % 2 != 0){
        return 0;
    }
    return x*x;
}

module.exports = {
    multiplyTwoNumbers: multiplyTwoNumbers,
    evenDoubler: evenDoubler
}