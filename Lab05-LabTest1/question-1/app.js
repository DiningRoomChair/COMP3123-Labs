var calculator = require("./calculator");

var x = 6;
var y = 6;
var z = calculator.multiplyTwoNumbers(x, y);

console.log(`multiply ${x} * ${y} equals: ${z}`);

var x = 4;
var z = calculator.evenDoubler(x);

console.log(`even doubler ${x} equals: ${z}`);