
//Mutating : adding a method or property to an object means mutated. Below we are adding greet.

exports.greet = function(){
    console.log('Hello');
}
console.log(exports);

// ***** Summary of this chaper, always use module.exports. *****

console.log(module.exports);