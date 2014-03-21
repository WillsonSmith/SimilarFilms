
/*
 * GET home page.
 */
var apiKey = require('../keys/api.js').movieDB;
var getData = require('./getData.js').getData;

exports.index = function(req, res){
  //homePage();
  getData({title:"index", path: '/3/movie/popular?api_key=' + apiKey}, req, res);
  //res.render('index', { title: 'Express' });
};
