var express = require('express');
var app = express();

//adding port from env.

var port = process.env.PORT || 3000;

//Adding middleware (if url says /assets, it will return css under /public)
app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request url '+req.url);
    next();
});

/*below are express req and res which wraps up starandard one and provide more functionality
  we can have same signature for get, post or delete

  render method from ejs (install ejs)
*/
app.get('/', function(req, res){
    res.render('index');
    //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/person/:id', function(req, res){
    res.render('person', { ID : req.params.id });
    //res.send('<html><head></head><body><h1>Person: '+req.params.id+ '</h1></body></html>');
});

/*multi params (Not working)
app.get('/persons/:page/:id', function(req, res){
    res.send('<html><head></head><body><h1>Person: '+req.params.id&req.params.page+ '</h1></body></html>');
});*/


app.get('/api', function(req, res) {
   res.json({firstname:'john', lastname:'Doe'});
});

app.listen(port);


