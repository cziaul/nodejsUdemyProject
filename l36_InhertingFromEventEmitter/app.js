//Inherating from EventEmitter

var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello World';
}

//Any object created from Greetr will also have method and property of EventEmitter prototyle

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet'); //We can use this since Greetr is already inherites events object which has emit method
}

var greeter1 = new Greetr();

greeter1.on('greet', function(){
    console.log('Someone greeted!');
});
greeter1.greet();




