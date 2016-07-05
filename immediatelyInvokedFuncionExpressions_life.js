//Scope

//Below is function express started ( and then immediately invoked it after } using () wow
/*
    variable created within function only accessable with that function.
*/
var firstname = 'Jane';

(function(name){
    var firstname ='John';
    console.log(firstname);
    console.log(name);

}('Joe'))

console.log(firstname)
