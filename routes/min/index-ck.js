var apiKey=require("../keys/api.js").movieDB,getData=require("./getData.js").getData;exports.index=function(e,a){getData({title:"index",path:"/3/movie/popular?api_key="+apiKey},e,a)};