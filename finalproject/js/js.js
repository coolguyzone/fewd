


//Finish this list
var foods = ["Chinese", "Thai", "Vietnamese", "Mexican", "Tacos", "Burritos", "Burgers", "Sandwiches", "Pizza", "Deep-Dish Pizza", "Dim Sum", "Sushi", "Ramen", "Pho", "Steak", "Diner Breakfast", "Mediterranean", "Gyros", "Japanese", "Acai Bowls", "Rotisserie Chicken", "Food Court", "German", "Subs", "Indian", "Pasta", "Burmese", "Jewish Deli", "Barbecue", "Ribs", "Korean", "African", "Fried Chicken", "Salad", "Seafood", "Shrimp", "Fish", "Fish N' Chips", "Pub Grub", "Caribbean", "Corn Dogs", "French", "Spanish", "Soul Food", "Wings", "Greek", "Falaafel"]

var colors = ["purple", "blue", "yellow", "orange", "pink", "red", "brown", "green", "lightpurple"]


function addFoodOptions() {
  for (var i = 0; i < 7; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "foodOption");
    newDiv.style.backgroundColor=colors[Math.floor(Math.random() * 7)];
    newDiv.textContent = foods[Math.floor(Math.random() * foods.length)];
    document.querySelector(".allOptions").appendChild(newDiv);
  }
}

addFoodOptions();

function removeFoodOption(event) {
  event.target.setAttribute("class", "hidden");
}

var options = document.querySelectorAll(".foodOption");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", removeFoodOption);
}



//How can you make the food options not repeat?
//Why are some divs not getting background colors?
//How can you make the last div stay on the page?
