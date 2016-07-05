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

var john = new Person('John', 'Doe');
john.greet();



