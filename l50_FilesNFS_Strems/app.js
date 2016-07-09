var fs = require('fs');

//This is good when we need to read confg file. //syncro process

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

//below is async method
var greet2 = fs.readFile(__dirname +'/greet.txt', 'utf8', 
    //if no err, first param will be null
    function(err, data){
        console.log(data);
});

console.log('Done');



