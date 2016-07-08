
'use strict';

var Greetr = require('./greetr');

var greeter1 = new Greetr();

// .on is getting from EventEmitter

greeter1.on('greet', function(data){
    console.log('Someone greeted!' + data);
});
greeter1.greet('Tony');