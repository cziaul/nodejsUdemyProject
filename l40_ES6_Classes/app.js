'use strict';

//Below Code copied from from Prototypal Inheritence N function to use ES6

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname
        
    }
    greet(){
        console.log('Hello '+ this.firstname)
    }
}

/*function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname
}

//how prototype works

You need to create a object like john in order to protype to work. Here we created a function Person and a instance of a function name(params) {
    'john'. Now we can call like john.greet().
}
*/

var john = new Person('John', 'Doe');
john.greet();
/*
If I create more objects from Person, this will autometically get property through prototype

*/

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.___proto__ === jane.___proto__)






