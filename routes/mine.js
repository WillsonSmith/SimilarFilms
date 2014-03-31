exports.list = function(req, res){
  //homePage();
  //getData({title:"index", path: '/3/movie/popular?api_key=' + apiKey}, req, res);
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);
  res.render('mine', { title: 'My Favourites' });
};
