var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    //converting to string using utf8
    var html = fs.readFileSync(__dirname+'/index.htm', 'utf8')
    //initializing variable
    var message = 'hello world ....'
    //replacing string with html
    html = html.replace('{Message}', message)
    res.end(html)
}).listen(1337, '127.0.0.1');