exports.AreNumberEqual = function(x, y){
    console.log("comparing two numbers: " + x + ", " + y)
    if(x == y){
        console.log("numbers are equal");
        return true;
    }
    console.log("numbers are not equal");
    return false;
}