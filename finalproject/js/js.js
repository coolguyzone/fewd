


//Finish this list
var foods = ["🍚 Chinese", "🍲 Thai", "🍜 Vietnamese", "🇲🇽 Mexican", "🇲🇽 Tacos", "🇲🇽 Burritos", "🍔 Burgers", "🍞 Sandwiches", "🍕 Pizza", "🍕 Deep-Dish Pizza", "🇨🇳 Dim Sum", "🍣 Sushi", "🍜 Ramen", "🍜 Pho", "🍖 Steak", "🍳 Diner Breakfast", "🍲 Mediterranean", "🍖 Gyros", "🍱 Japanese", "🍌 Acai Bowls", "🍗 Rotisserie Chicken", "🍛 Food Court", "🇩🇪 German", "🍞 Subs", "🇮🇳 Indian", "🍝 Pasta", "🍲 Burmese", "🇮🇱 Jewish Deli", "🍖 Barbecue", "🍖 Ribs", "🍛 Korean", "🍛 African", "🍗 Fried Chicken", "🍅 Salad", "🐠 Seafood", "🍤 Shrimp", "🐟 Fish", "🐠🍟 Fish N' Chips", "🍺🍗 Pub Grub", "🇵🇷 Caribbean", "🌽🐶 Corn Dogs", "🇫🇷 French", "🇪🇸 Spanish", "🍗 Soul Food", "🍗 Wings", "🍛 Greek", "🇮🇱 Falaafel", "☕️ Greasy Spoon"]

var colors = ["purple", "blue", "darkblue", "orange", "pink", "red", "brown", "green", "blueviolet", "cyan", "fuchsia", "lightsalmon", "lime", "lawngreen", "mediumslateblue", "palevioletred", "peachpuff", "peru", "lightblue", "goldenrod", "gold", "darkviolet", "darkmagenta"]


var randoFoods = [];
var randoColors = [];
var foodStopLimit = foods.length;
var colorStopLimit = colors.length;


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
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "foodOption");
    newDiv.style.backgroundColor=randoColors[i];
    var thisFood = randoFoods[i];
    newDiv.textContent = thisFood;


    document.querySelector(".allOptions").appendChild(newDiv);

  }
}

addFoodOptions();

var turn = 1;
console.log("Player 1 is up (first turn)");

function removeFoodOption(event) {
  event.target.setAttribute("class", "hidden");
  var h2 = document.querySelector("h2");
  turn = turn + 1;
  console.log(turn);
  if (turn === 1) {
    console.log("player 1 is up!");
  }
  else if (turn === 2) {
    console.log("player 2 is up!");
    h2.textContent = "Player two, please eliminate the next option"
  }
    else if (turn === 3) {
      console.log("player 1 is up!");
      h2.textContent = "Player one, please eliminate the next option"
    }
    else if (turn === 4) {
      console.log("player 2 is up!");
      h2.textContent = "Player two, please eliminate the next option"
    }
    else if (turn === 5) {
      console.log("player 1 is up!");
      h2.textContent = "Player one, please eliminate the next option"
    }
    else if (turn === 6) {
      console.log("player 2 is up! (last turn!)");
      h2.textContent = "Player two, please eliminate the LAST option"
      }
      else if (turn === 7) {
        console.log("GAME OVER");
        h2.textContent = "Tonight You Will Dine On:"
        var finalOption = document.querySelector(".foodOption");
        finalOption.setAttribute("class", "final-option");
        finalOption.removeEventListener("click", removeFoodOption);
        var finalHeading = document.querySelector("h1");
        finalHeading.textContent = "IT HAS BEEN DECIDED!";
        }




}


var options = document.querySelectorAll(".foodOption");


for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", removeFoodOption);

  }






//How can you make the food options not repeat?
  //*Fixed with randomindex arrays

//Why are some divs not getting background colors?
  //*When the html doesn't recognize a color name, it turns up black

//How can you make the last div stay on the page?

//How can you create a alternating message for player 1 and player 2?

//Rotisserie chicken and other long names end up overflowing the div

//Set the height of the text on the divs to the middle

//Finish adding emojis
