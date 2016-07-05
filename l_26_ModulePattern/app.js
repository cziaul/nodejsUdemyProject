var greet = require('./greet1');
greet();
//Directly calling greet since it is a method of module.exports
var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

/*  Checking refernce since greet3 is creating new object. Below will show 'changed hello world!!b since
    Node js cashes result of all require function 
*/

greet3.greeting='Changed hello World!!b'
var greet3b = require('./greet3');
greet3b.greet();

//Since calling constructor

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

// Below no way we can change property value because no access to the property value
var greet5 = require('./greet5').greet;
greet5();




