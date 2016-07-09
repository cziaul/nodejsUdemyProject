var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark:32 * 1024}); //32KB

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk){
    //console.log(chunk.length);
    console.log(chunk);
    writeable.write(chunk);
});

