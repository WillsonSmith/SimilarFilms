var builder = (function(){

  return{

    setData: function(element, data){

      var link = element.querySelector('.simLink'),
          elTitle = element.querySelector('.title'),
          elRating = element.querySelector('.rating'),

          elFav = element.querySelector('.fav'),

          img = document.createElement('img'),
          film = data.title,
          id = data.id,
          rating = data.rating,
          imageBaseURL = 'http://image.tmdb.org/t/p/w300/',
          image = data.posterURL;

          img.src = imageBaseURL + image;
          link.appendChild(img);
          link.setAttribute('href', '/similar/' + id);


          elFav.setAttribute('data-film', film);
          elFav.setAttribute('data-id', id);
          elFav.setAttribute('data-rating', rating);
          elFav.setAttribute('data-image', image);

          elTitle.innerHTML = film;
          elRating.innerHTML = rating;

          return element;

    },

    makeResult: function(element){
      var dupe = element.cloneNode(true),
          second,
          secondImg,
          toAppend = document.createDocumentFragment();

      var applyTo = document.getElementById('resultId');

      localforage.getItem('favourites', function(val){

        var firstResult = document.querySelector('.result');
        var data = val.extraData;

        document.getElementById('resultId').removeChild(element);
        //builder.setData(firstResult, data[0]);


        //console.log(val);
        /*for (var i = 1, l = data.length; i < l; i++) {

          if (val.extraData[i].title !== '') {

            second = dupe.cloneNode(true);

            builder.setData(second, data[i]);
            toAppend.appendChild(second);

        }

      }*/
        for(var index in data) {
          if (data.hasOwnProperty(index)) {
            var attr = data[index];

            second = dupe.cloneNode(true);

            builder.setData(second, attr);
            toAppend.appendChild(second);

          }
        }
        applyTo.appendChild(toAppend);


      });

    }

  };

})();



builder.makeResult(document.querySelector('.result'));
