/*In Javascript when variable is set with = sign, then it is new object thats why even though
below should refer to same pointer, because = sign these are differnt object.
*/ 

exports = function(){
    console.log('Hello');
}
console.log(exports);
console.log(module.exports);

