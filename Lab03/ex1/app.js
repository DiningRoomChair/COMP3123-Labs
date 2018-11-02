//require built in file system module
var fs = require('fs');

//create readable stream to read the file
var stream = fs.createReadStream('data.txt');

//subscribe to 'data' emitter in readable stream
stream.on("data", function(data) {
    data = String(data);
    console.log(data);
})