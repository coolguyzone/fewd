


//Finish this list
var foods = ["🍚 Chinese", "🍲 Thai", "🍜 Vietnamese", "🇲🇽 Mexican", "🇲🇽 Tacos", "🇲🇽 Burritos", "🍔 Burgers", "🍞 Sandwiches", "🍕 Pizza", "🍕 Deep-Dish Pizza", "🇨🇳 Dim Sum", "🍣 Sushi", "🍜 Ramen", "🍜 Pho", "🍖 Steak", "🍳 Diner Breakfast", "🍲 Mediterranean", "🍖 Gyros", "🍱 Japanese", "🍌 Acai Bowls", "🍗 Rotisserie Chicken", "🍛 Food Court", "🇩🇪 German", "🍞 Subs", "🇮🇳 Indian", "🍝 Pasta", "🍲 Burmese", "🇮🇱 Jewish Deli", "🍖 Barbecue", "🍖 Ribs", "🍛 Korean", "🍛 African", "🍗 Fried Chicken", "🍅 Salad", "🐠 Seafood", "🍤 Shrimp", "🐟 Fish", "🐠🍟 Fish N' Chips", "🍺🍗 Pub Grub", "🇵🇷 Caribbean", "🌽🐶 Corn Dogs", "🇫🇷 French", "🇪🇸 Spanish", "🍗 Soul Food", "🍗 Wings", "🍛 Greek", "🇮🇱 Falaafel", "☕️ Greasy Spoon"]
var colors = ["purple", "blue", "darkblue", "orange", "pink", "red", "brown", "green", "blueviolet", "cyan", "fuchsia", "lightsalmon", "lime", "lawngreen", "mediumslateblue", "palevioletred", "peachpuff", "peru", "lightblue", "goldenrod", "gold", "darkviolet", "darkmagenta"]
var randoFoods = [];
var randoColors = [];
var foodStopLimit = foods.length;
var colorStopLimit = colors.length;
var shuffle = document.querySelector(".shuffle");
var shuffleCount = 1;


for (var i = 0; i < foodStopLimit; i++) {
  var randoFoodIndex = Math.floor(Math.random() * foods.length);
  randoFoods.push(foods[randoFoodIndex]);
  var removedFoods = foods.splice(randoFoodIndex, 1)[0];
}

for (var i = 0; i < colorStopLimit; i++) {
  var randoColorIndex = Math.floor(Math.random() * colors.length);
  randoColors.push(colors[randoColorIndex]);
  var removedColors = colors.splice(randoColorIndex, 1)[0];
}



function addFoodOptions() {
  for (var i = 0; i < 7; i++) {
    if (i === 0) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "foodOption");
    newDiv.classList.add('animated');
    newDiv.classList.add('bounceInLeft');
    newDiv.style.backgroundColor=randoColors[i];
    var thisFood = randoFoods[i];
    newDiv.textContent = thisFood;
    document.querySelector(".allOptions").appendChild(newDiv);
    }

    else if (i % 2 === 0) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "foodOption");
      newDiv.classList.add('animated');
      newDiv.classList.add('bounceInLeft');
      newDiv.style.backgroundColor=randoColors[i];
      var thisFood = randoFoods[i];
      newDiv.textContent = thisFood;
      document.querySelector(".allOptions").appendChild(newDiv);
    }

    else {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "foodOption");
      newDiv.classList.add('animated');
      newDiv.classList.add('bounceInRight');
      newDiv.style.backgroundColor=randoColors[i];
      var thisFood = randoFoods[i];
      newDiv.textContent = thisFood;
      document.querySelector(".allOptions").appendChild(newDiv);
    }
  }
}

addFoodOptions();

var turn = 1;
console.log("Player 1 is up (first turn)");

function removeFoodOption(event) {
  $(event.target).addClass('animated rollOut');
  $(event.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hide);

  function hide() {
  event.target.setAttribute("class", "hidden");
  }
  var h2 = document.querySelector("h2");
  turn = turn + 1;
  console.log(turn);

  if (turn === 7 ) {
    console.log("GAME OVER");
    h2.textContent = "Tonight You Will Dine On:"
    var finalOption = document.querySelector(".foodOption:not(.rollOut)");
    finalOption.setAttribute("class", "final-option");
    finalOption.removeEventListener("click", removeFoodOption);
    var finalHeading = document.querySelector("h1");
    finalHeading.textContent = "IT HAS BEEN DECIDED!";
    }

  else if (turn === 2) {
    console.log("player 2 is up!");
    h2.textContent = "Player two, please eliminate the next option"
//Eliminate shuffle after first turn has been taken
    console.log("test!");
    shuffle.setAttribute("class", "hidden");
  }

  else if (turn % 2 === 0) {
    console.log("player 2 is up!");
    h2.textContent = "Player two, please eliminate the next option"
  }

  else {
    console.log("player 1 is up!");
    h2.textContent = "Player one, please eliminate the next option"
  }

}


var options = document.querySelectorAll(".foodOption");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", removeFoodOption);

  }



function shuffleFoods(event) {
  //make all the options class of hidden
  var foodOptions = document.querySelectorAll(".foodOption");
  for (var i = 0; i < foodOptions.length; i++) {
    foodOptions[i].setAttribute("class", "hidden");
  }
//display a new set of options with the next 7 items in the array:
  for (var i = 1; i < 8; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "foodOption");
    newDiv.style.backgroundColor=randoColors[(7 * shuffleCount) + i];
    var thisFood = randoFoods[(7 * shuffleCount) + i];
    newDiv.textContent = thisFood;
    document.querySelector(".allOptions").appendChild(newDiv);
    var options = document.querySelectorAll(".foodOption");
    for (var i = 0; i < options.length; i++) {
      options[i].addEventListener("click", removeFoodOption);

    }
  }
  shuffleCount = shuffleCount + 1;


}


shuffle.addEventListener("click", shuffleFoods);






//OPEN ISSUES:
//After a few shuffles, we start running out of colors and eventually run out of food options . . .
//-less than perfect fix: add more colors and foods to allow more shuffles before running out of options
//-less than perfect fix: have the whole process start over with a new array on each shuffle(but you would get repeat foods)

//Would be nice to have some animations upon removeFoodOption rather than just having the DIVs dissappear

//Could make the messaging if/else statement more concise using modulos

//Make sizes work better on desktop and mobile, perhaps using media queries?

//How can I make the DIVs animate before disappearing off the screen?


//CLOSED ISSUES:
//How can you make the food options not repeat?
  //*Fixed with randomindex arrays

//Why are some divs not getting background colors?
  //*When the html doesn't recognize a color name, it turns up black

//How can you make the last div stay on the page?
  //*Used if/else statement to set conditions for final turn

//How can you create a alternating message for player 1 and player 2?
  //*Used if/else statements to set messaging for each turn

//Rotisserie chicken and other long names end up overflowing the div
  //*Adjusted font/div sizes

//Set the height of the text on the divs to the middle
  //*set line-height equal to height of div

//Finish adding emojis
  //*emojis added




  //have colors start from scratch on refresh
  //instead of yelp api try using a google search
  //google places/maps api
