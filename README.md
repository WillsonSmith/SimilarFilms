
[SimilarFilms](http://similarfilms.com)

Similar Films is a way to quickly look at films that are similar to your favourites.
Using a combination of server side and client side rendering, it shows lists of movies
which you can then add to your favourites, or look at films that are like them. Having
the favourites all stored on your local computer or device allows the site to function
with no account necessary. This is achieved by using a combination of web-native local
storage techniques provided by
[localforage](https://hacks.mozilla.org/2014/02/localforage-offline-storage-improved/).
This project was developed with Node.JS on the server side, and modern web technology
on the user end. These two interact with The [Movie Database](https://www.themoviedb.org/)
to provide a rich user experience.


Most of this website was built in a couple days, with various tweaks and finishing-ups
taking a few extra days. As an ongoing project, many things have yet to be finalised,
and it is expected you will find bugs. 


To use the site:
When you initially load up the website, you will be presented with recent popular films.
You can click the heart to add these to your favourites, or you can search for other films.
Once you have found a film which you want to see similar films for, click the image and it
will bring you to a new list. Favouriting films is not necessary, but allows you to quickly
access any film you thoroughly enjoyed quickly and easily.


Note that since this uses local device storage, and no account, your favourites
will not transcend multiple computers or devices. This should not be a big issue
though, as you can still search for a film you enjoyed. The favourites page is for
convenience, but is not a necessary part of the experience.


