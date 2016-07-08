// jsconfig.json needed to run ES6 code

var name = 'John Doe';

//Old Way
var greet = 'Hello '+ name;

//New in ES6 String concatination

/*
    bablejs.io to convert ES6 new code, if that is not supported by browser. 
*/

var greet2 = `Hello ${ name }`;

console.log(greet);
console.log(greet2);



