
var apiKey = require('../keys/api.js').movieDB;
var getData = require('./getData.js').getData;

exports.list = function(req, res){
  //homePage();
  var query = req.params.movie;
  getData({title:"index", path: '/3/movie/' + query + '/similar_movies?api_key=' + apiKey}, req, res, query);
  //res.render('index', { title: 'Express' });
};
