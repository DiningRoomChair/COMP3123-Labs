var fs = require("fs");

var stream = fs.createReadStream('./data.txt');
var file = fs.createWriteStream('./output.txt');

stream.on("data", function(data) {
    console.log(data);
    dataString = String(data);
    console.log(dataString);
    file.write(dataString);

    file.end();
})
stream.on("end", function(){
    console.log("\nwrite is completed!");
})