var cal = require('./calculator');
var com = require('./comparer');

x = 5;
y = 10;

if(com.AreNumberEqual(x, y)){
    console.log("adding two numbers");
    console.log(cal.Add(x, y));
}
else{
    console.log("subtracting two numbers");
    console.log(cal.Subtract(x, y));
}

x = 5;
y = 5;

if(com.AreNumberEqual(x, y)){
    console.log("adding two numbers");
    console.log(cal.Add(x, y));
}
else{
    console.log("subtracting two numbers");
    console.log(cal.Subtract(x, y));
}