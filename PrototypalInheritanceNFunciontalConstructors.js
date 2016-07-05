function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname
}

//how prototype works
/*
You need to create a object like john in order to protype to work. Here we created a function Person and a instance of a function name(params) {
    'john'. Now we can call like john.greet().
}
*/

Person.prototype.greet = function(){
    console.log('Hello '+ this.firstname)
}

Person.prototype.country = function(){
    console.log('American')
}

var john = new Person('John', 'Doe');
john.greet();
john.country();
/*
If I create more objects from Person, this will autometically get property through prototype

*/

var jane = new Person('Jane', 'Doe');
jane.greet();
jane.country();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.___proto__ === jane.___proto__)






