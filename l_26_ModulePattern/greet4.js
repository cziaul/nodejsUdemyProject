function Greetr() {
    this.greeting = 'Hello World!!4';
    this.greet = function(){
        console.log(this.greeting);
    }
}

//Instead of creating object with new object, we are giving ability to create new object

module.exports =Greetr;