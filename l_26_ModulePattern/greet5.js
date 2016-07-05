//Here we are not exposing 'greeting' variable but function.

/*  Revealing module pattern : Exposing only the properties and Methods we want via an returned object.
    A very common and clean way to structure and protect code with modules.
*/


var greeting = "Hello World5"

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}