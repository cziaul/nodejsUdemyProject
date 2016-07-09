//Piping to a compressed (gz/zip) format

var fs = require('fs');
var zlib = require('zlib')

var readable = fs.createReadStream(__dirname + '/greet.txt'); 

var writable = fs.createWriteStream(__dirname + '/greetcopypipe_zlib.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz')

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed); //This is calling chaning



