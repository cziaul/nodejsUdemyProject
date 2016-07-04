//function statement

function greet(){
    console.log("Hi")
}
greet();

//function are first-class
function logGreet(xy){
    xy();
}
logGreet(greet);

//function expression

var greetMe = function() {
    console.log("Hi Zia");
}
greetMe();

//it's first-class

logGreet(greetMe);

//use a function expression on the fly

logGreeting(function() {
    console.log("zzzzzz");
})
