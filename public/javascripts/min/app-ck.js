picturefill(),function t(){function t(){function t(t){function r(t){function i(t){t.querySelector(".icon-heart").classList.toggle("hidden"),t.querySelector(".icon-heart2").classList.toggle("hidden")}function r(t,i,r,a){e.results.push(t),e.extraData[t]={title:t,id:i,rating:r,posterURL:a}}var a=this.getAttribute("data-film"),s=this.getAttribute("data-id"),l=this.getAttribute("data-rating"),n=this.getAttribute("data-image"),o;null!=e&&(o=e.results.indexOf(a)),-1!==o?(e.results.splice(o,1),delete e.extraData[a],localforage.setItem("favourites",e,function(){i(this)}.bind(this))):e?(r(a,s,l,n),localforage.setItem("favourites",e,function(){i(this)}.bind(this))):(e={results:[],extraData:[]},r(a,s,l,n))}for(var a,s=0,l=i.length;l>s;s++){a=i[s].getAttribute("data-film");for(var n=0,o=t.results.length;o>n;n++)a===t.results[n]&&(i[s].querySelector(".icon-heart").classList.remove("hidden"),i[s].querySelector(".icon-heart2").classList.add("hidden"))}for(var s=0,l=i.length;l>s;s++)i[s].querySelector(".fav").addEventListener("click",r)}var e,i=document.querySelectorAll(".result");localforage.getItem("favourites").then(function(i){e=i,t(e)})}t()}();