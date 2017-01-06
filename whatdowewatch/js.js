var movies = []
var movieTitles = []
var colors = [
  "#deefb7",
  "#98dfaf",
  "#5fb49c",
  "#414288",
  "#682d63",
  "#f068E4",
  "#7a7cff"
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready( function() {

for (var i = 0; i < 200; i++) {
  var movieID = getRandomInt(0, 3748528);

  var movieID = movieID.toString();

  if (movieID < 10) {
    movieID = "000000" + movieID;
  }
  else if (movieID < 100) {
    movieID = "00000" + movieID;
  }
  else if (movieID < 1000) {
    movieID = "0000" + movieID;
  }
  else if (movieID < 10000) {
    movieID = "000" + movieID;
  }
  else if (movieID < 100000) {
    movieID = "00" + movieID;
  }
  else if (movieID < 1000000) {
    movieID = "0" + movieID;
  }

  movieID = "tt" + movieID;

  //CHECK TO SEE IF MOVIE IS ALREADY IN THE ARRAY
  if (movies.indexOf(movieID) > -1) {
    //In the array!
} else {
    //Not in the array
    movies.push(movieID);
    $.get("https://omdbapi.com/?i=" + movieID, convertResults);

    function convertResults(results) {
      var movieTitle = results.Title;
      var movieType = results.Type;
      var movieLanguage = results.Language;

      if (movieType === "movie" && movieLanguage === "English") {
      movieTitles.push(movieTitle);
    }

    }



}

}

      // $.get("https://omdbapi.com/?i=" + movies[1], convertResults);
      //
      // function convertResults(results) {
      //   var movieTitle = results.Title;
      //   movieTitles.push(movieTitle);
      //
      // }





});
