
var Emitter = require('events'); //getting system event of emitter
var eventConfig = require('./config').events; // getting config file to replace any hard coded value like 'greet' 

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, someone said hello.');

});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occurred!');

});

console.log('Hello!');
emtr.emit(eventConfig.GREET);

