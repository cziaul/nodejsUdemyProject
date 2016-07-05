//Using own function name(params)

function Greetr() {
    this.greeting = 'Hello World!!';
    this.greet = function(){
        console.log(this.greeting);
    }
}
module.exports =new Greetr();

    