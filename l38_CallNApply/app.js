var obj = {
    name : 'John Doe',
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}
obj.greet();

// Using new .call
// Benefit about .call is we can pass param and replace a property

obj.greet.call({name:'Jane Doe'});

/* Difference between .call and .apply is if we have had param in function like below
    var obj = {
        name : 'John Doe',
        greet:function(param){
            console.log(`Hello ${this.name}`);
    }
}
In .call
    obj.greet.call({name:'Jane Doe'}, param1, param2, param3);

But in .appply we can pass an array like below
    obj.greet.apply({name:'Jane Doe'}[param, param]);

*/ 
obj.greet.apply({name:'Jane Doe'});



