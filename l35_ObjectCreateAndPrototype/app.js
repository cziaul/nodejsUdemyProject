/*
    extends can be used?
*/

// Object literale

// Clear way to set up chain (inheritence) person is prototype of john and jane object.
 var person = {
     firstname: '',
     lastname:'',
     greet:function(){
         return this.firstname+ ' '+this.lastname;
     }
 }

 var john = Object.create(person);
 john.firstname ='john';
 john.lastname="Doe";

 var jane = Object.create(person);
 jane.firstname ='jane';
 jane.lastname="Doe";

console.log(john.greet());
console.log(jane.greet());

