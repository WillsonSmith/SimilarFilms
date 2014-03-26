
var apiKey = require('../keys/api.js').movieDB;
var getData = require('./getData.js').getData;

exports.list = function(req, res){
  //homePage();
  var query = req.params.query;
  getData({view: "index", title:"search", path: '/3/search/movie?query=' + encodeURIComponent(query) + '&api_key=' + apiKey}, req, res, query);
  //res.render('index', { title: 'Express' });
};
