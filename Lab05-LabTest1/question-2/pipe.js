var fs = require("fs");
var zlib = require("zlib");

var stream = fs.createReadStream('./output.txt');
var write = fs.createWriteStream('./output.txt.gz')

var zipped = zlib.createGzip();

stream.pipe(zipped).pipe(write);