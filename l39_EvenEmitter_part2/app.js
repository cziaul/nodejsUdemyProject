//Inherating from EventEmitter

var EventEmitter = require('events');
var util = require('util');

/*
  When we case new Greetr() then new property and function being created. But what if inherited object also has function and property
  in that case in oppose to adding property in prototype. In that case we need ->  EventEmitter.call(this);
  
*/
function Greetr(){
    EventEmitter.call(this);
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