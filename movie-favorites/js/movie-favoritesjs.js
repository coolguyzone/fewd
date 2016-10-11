

//create function with AJAX to get movie data from imdb api
//use that function to get specific data, title, year, etc
//assign that function to a click event on one of the images on the page using the id tag of that img



//    $.get("http://omdbapi.com/?i=tt0071615", displayResults);
//
//    function displayResults(results) {
//   console.log(results.Title);
//   console.log(results.Year);
//   console.log(results.Rated);
//   console.log(results.Runtime);
//   console.log(results.Plot);
// }


//Get one working without the loop or event.target . . .
// function getMovieData(event) {
//   $.get("http://omdbapi.com/?i=tt0071615", displayResults);
//
//   function displayResults(results) {
//     document.querySelector("#movie-title").textContent = results.Title;
//     document.querySelector("#movie-year").textContent = results.Year;
//     document.querySelector("#movie-rating").textContent = results.Rated;
//     document.querySelector("#movie-runtime").textContent = results.Runtime;
//     document.querySelector("#movie-plot").textContent = results.Plot;
//
//   }
// }
// document.querySelector(".holymountain").addEventListener("click", getMovieData);

//DO IT WITH THE LOOP AND EVENT.TARGET

function getMovieData(event) {
  $.get("https://omdbapi.com/?i=" + event.target.id, displayResults);

  function displayResults(results) {
    document.querySelector("#movie-title").textContent = results.Title;
    document.querySelector("#movie-year").textContent = results.Year;
    document.querySelector("#movie-rating").textContent = results.Rated;
    document.querySelector("#movie-runtime").textContent = results.Runtime;
    document.querySelector("#movie-plot").textContent = results.Plot;
  }
}

posters = document.querySelectorAll("img");

for (var i = 0; i < posters.length; i++) {
  posters[i].addEventListener("click", getMovieData);
}
