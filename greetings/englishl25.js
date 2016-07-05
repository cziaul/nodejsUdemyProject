var greetings = require('./gretting_l25.json');

//Example 1
/*var greet =function(){
    console.log('English');
}*/

//Example how to get from JSON
var greet =function(){
    console.log(greetings.en);
}
module.exports = greet;


