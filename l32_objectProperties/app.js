//object properties and methods

var obj = {
    greet:'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

// I can have a variable set to string and use that variable to access the property of object. 
var prop = 'greet'
console.log(obj[prop])

//function and arrays

var arr = []

arr.push(function(){
    console.log('Hello World 1');
});
arr.push(function(){
    console.log('Hello World 2');
});

arr.push(function(){
    console.log('Hello World 3');
});

/*  looping the arrays to get each functions
    console.log is each item.
*/ 

arr.forEach(function(items){
    items();
})
