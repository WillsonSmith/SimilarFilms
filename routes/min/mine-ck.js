exports.list=function(e,r){r.header("Cache-Control","no-cache, no-store, must-revalidate"),r.header("Pragma","no-cache"),r.header("Expires",0),r.render("mine",{title:"My Favourites"})};