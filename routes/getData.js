module.exports.getData = function getHome(opts, req, res, query){

  var baseURL = 'https://api.themoviedb.org/3/movie/550?api_key=';
  //apiKey = require('../keys/api.js').movieDB,

  movieDBOptions = {

    host: 'api.themoviedb.org',
    path: opts.path,
    port: '80',
    method: 'GET'

  };
  console.log(movieDBOptions.host + movieDBOptions.path);
  console.log('query', query);
  function getData(opts){//default using https

    var body = '',
    options = {

      host: opts.host,
      path: opts.path,
      method: opts.method,

    };


    https = require('https');

    https.request(options, function handleResult(results){

      results.setEncoding('utf8');

      results.on('data', function addChunk(chunk){

        body += chunk;

      });

      results.on('error', function handleError(error){

        console.log('error', error.message);

      });

      results.on('end', function returnResult(){

        var data = JSON.parse(body);//JSON.parse(body);
        //console.log(body);
        //return data;
        render(data);

      });

    }).end();

  }

  function render(data){

    res.render(opts.title, { title: opts.title, results: data.results });

  }

  getData(movieDBOptions);

};
