exports.list = function(req, res){
  //homePage();
  //getData({title:"index", path: '/3/movie/popular?api_key=' + apiKey}, req, res);
  res.render('mine', { title: 'My Favourites' });
};
