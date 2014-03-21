
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var similar = require('./routes/similar');
var searches = require('./routes/search');
var mine = require('./routes/mine');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/similar/:movie', similar.list);
app.get('/search/:query', searches.list);
app.post('/search', function(req, res){
  res.redirect('/search/' + req.body.searchbox);
  console.log(req.body);


});
app.get('/mine', mine.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
