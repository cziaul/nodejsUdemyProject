/*
    How to call and use Native Modules
    No './util'
    Read API documentation
*/

var util = require('util');

var name = 'Tony';

var greetng = util.format('Hello, %s', name);
util.log(greetng);

