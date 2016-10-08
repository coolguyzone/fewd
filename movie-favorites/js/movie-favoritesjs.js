

//create function with AJAX to get movie data from imdb api
//use that function to get specific data, title, year, etc
//assign that function to a click event on one of the images on the page using the id tag of that img



   $.get("http://omdbapi.com/?i=tt0071615", displayResults);

   function displayResults(results) {
  console.log(results.Title);
  console.log(results.Year);
  console.log(results.Rated);
  console.log(results.Runtime);
  console.log(results.Plot);
}
