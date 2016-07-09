//Here callback is function

function greet(callback){
    console.log('Hello');
    var data = {
        name: 'John Doe'
    };
    callback(data);
}

//writing callback function1
greet(function(data){
    console.log('The callback was invoked!');
    console.log(data);
});

//writing callback function2
greet(function(data){
    console.log('A different callback was invoked');
    console.log(data.name);
});