


//Finish this list

var foods = [
  {
    name: "Burgers",
    category: "burgers",
    emoji: "🍔",
    recipelink: "http://www.foodnetwork.com/recipes/alton-brown/burger-of-the-gods-recipe.html",
    recipename: "Burger Of The Gods"
  },
  {
    name: "Tacos",
    category: "mexican",
    emoji: "🇲🇽",
    recipelink: "http://www.epicurious.com/recipes/food/views/pork-carnitas-tacos",
    recipename: "Double-Pork Carnitas Tacos"
  },
  {
    name: "Chinese",
    category: "chinese",
    emoji: "🍚",
    recipelink: "http://allrecipes.com/recipe/9027/kung-pao-chicken/",
    recipename: "Kung Pao Chicken"
  },
  {
    name: "Thai",
    category: "thai",
    emoji: "🍲"
  },
  {
    name: "Vietnamese",
    category: "vietnamese",
    emoji: "🍜"
  },
  {
    name: "Mexican",
    category: "mexican",
    emoji: "🇲🇽"
  },
  {
    name: "Burritos",
    category: "mexican",
    emoji: "🇲🇽"
  },
  {
    name: "Sandwiches",
    category: "sandwiches",
    emoji: "🍞"
  },
  {
    name: "Pizza",
    category: "italian",
    emoji: "🍕"
  },
  {
    name: "Deep-Dish Pizza",
    category: "italian",
    emoji: "🍕"
  },
  {
    name: "Dim Sum",
    category: "chinese",
    emoji: "🇨🇳"
  },
  {
    name: "Sushi",
    category: "japanese",
    emoji: "🍣"
  },
  {
    name: "Ramen",
    category: "japanese",
    emoji: "🍜"
  },
  {
    name: "Pho",
    category: "vietnamese",
    emoji: "🍜"
  },
  {
    name: "Steak",
    category: "meat",
    emoji: "🍖"
  },
  {
    name: "Diner Breakfast",
    category: "breakfast",
    emoji: "🍳"
  },
  {
    name: "Mediterranean",
    category: "mediterranean",
    emoji: "🍲"
  },
  {
    name: "Gyros",
    category: "mediterranean",
    emoji: "🍖"
  },
  {
    name: "Japanese",
    category: "japanese",
    emoji: "🍱"
  },
  {
    name: "Acai Bowls",
    category: "raw",
    emoji: "🍌"
  },
  {
    name: "Rotisserie Chicken",
    category: "chicken",
    emoji: "🍗"
  },
  {
    name: "Food Court",
    category: "variety",
    emoji: "🍛"
  },
  {
    name: "German",
    category: "german",
    emoji: "🇩🇪"
  },
  {
    name: "Subs",
    category: "sandwiches",
    emoji: "🍞"
  },
  {
    name: "Indian",
    category: "indian",
    emoji: "🇮🇳"
  },
  {
    name: "Curry",
    category: "indian",
    emoji: "🇮🇳"
  },
  {
    name: "Pasta",
    category: "italian",
    emoji: "🍝"
  },
  {
    name: "Italian",
    category: "italian",
    emoji: "🍝"
  },
  {
    name: "Burmese",
    category: "chinese",
    emoji: "🍲"
  },
  {
    name: "Jewish Deli",
    category: "deli",
    emoji: "🇮🇱"
  },
  {
    name: "Barbecue",
    category: "meat",
    emoji: "🍖"
  },
  {
    name: "Ribs",
    category: "meat",
    emoji: "🍖"
  },
  {
    name: "Korean",
    category: "korean",
    emoji: "🍛"
  },
  {
    name: "African",
    category: "african",
    emoji: "🍛"
  },
  {
    name: "Fried Chicken",
    category: "chicken",
    emoji: "🍗"
  },
  {
    name: "Salads",
    category: "raw",
    emoji: "🍅"
  },
  {
    name: "Seafood",
    category: "seafood",
    emoji: "🐠"
  },
  {
    name: "Shrimp",
    category: "seafood",
    emoji: "🍤"
  },
  {
    name: "Fish",
    category: "seafood",
    emoji: "🐟"
  },
  {
    name: "Fish N' Chips'",
    category: "seafood",
    emoji: "🐠🍟"
  },
  {
    name: "Pub Grub",
    category: "irish",
    emoji: "🍺🍗"
  },
  {
    name: "Caribbean",
    category: "caribbean",
    emoji: "🇵🇷"
  },
  {
    name: "Corn Dogs",
    category: "sausages",
    emoji: "🌽🐶"
  },
  {
    name: "French",
    category: "french",
    emoji: "🇫🇷"
  },
  {
    name: "Spanish",
    category: "spanish",
    emoji: "🇪🇸"
  },
  {
    name: "Paella",
    category: "spanish",
    emoji: "🇪🇸"
  },
  {
    name: "Tapas",
    category: "spanish",
    emoji: "🇪🇸"
  },
  {
    name: "Soul Food",
    category: "soul food",
    emoji: "🍗"
  },
  {
    name: "Wings",
    category: "chicken",
    emoji: "🍗"
  },
  {
    name: "Greek",
    category: "mediterranean",
    emoji: "🍛"
  },
  {
    name: "Falafel",
    category: "mediterranean",
    emoji: "🇮🇱"
  },
  {
    name: "Greasy Spoon",
    category: "breakfast",
    emoji: "☕️"
  }
]



var colors = [
  "#deefb7",
  "#98dfaf",
  "#5fb49c",
  "#414288",
  "#682d63",
  "#f068E4",
  "#7a7cff"

]
var randoFoods = [];
var randoColors = [];
var categories = [];
var foodStopLimit = foods.length;
var colorStopLimit = colors.length;
var shuffle = document.querySelector(".shuffle");
var shuffleCount = 1;


for (var i = 0; i < foodStopLimit; i++) {
  var randoFoodIndex = Math.floor(Math.random() * foods.length);

  category = foods[randoFoodIndex].category;
  console.log(category);

  if($.inArray( category, categories )>=0){

     // code for true condition
}else{
  categories.push(category);
  randoFoods.push(foods[randoFoodIndex]);

  var removedFoods = foods.splice(randoFoodIndex, 1)[0];
}

     // code for false condition
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
    newDiv.textContent = thisFood.emoji + " " + thisFood.name;
    newDiv.setAttribute("food-type", thisFood.name);
    newDiv.setAttribute("recipe-link", thisFood.recipelink);
    newDiv.setAttribute("recipe-name", thisFood.recipename);
    document.querySelector(".allOptions").appendChild(newDiv);
    }

    else if (i % 2 === 0) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "foodOption");
      newDiv.classList.add('animated');
      newDiv.classList.add('bounceInLeft');
      newDiv.style.backgroundColor=randoColors[i];
      var thisFood = randoFoods[i];
      newDiv.textContent = thisFood.emoji + " " + thisFood.name;
      newDiv.setAttribute("food-type", thisFood.name);
      newDiv.setAttribute("recipe-link", thisFood.recipelink);
      newDiv.setAttribute("recipe-name", thisFood.recipename);
      document.querySelector(".allOptions").appendChild(newDiv);
    }

    else {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "foodOption");
      newDiv.classList.add('animated');
      newDiv.classList.add('bounceInRight');
      newDiv.style.backgroundColor=randoColors[i];
      var thisFood = randoFoods[i];
      newDiv.textContent = thisFood.emoji + " " + thisFood.name;
      newDiv.setAttribute("food-type", thisFood.name);
      newDiv.setAttribute("recipe-link", thisFood.recipelink);
      newDiv.setAttribute("recipe-name", thisFood.recipename);
      document.querySelector(".allOptions").appendChild(newDiv);
    }
  }
}

addFoodOptions();

var turn = 1;
console.log("Player 1 is up (first turn)");

function removeFoodOption(event) {

  var h2 = document.querySelector("h2");
  turn = turn + 1;
  console.log(turn);

  if (turn === 7 ) {
    $(event.target).addClass('animated rollOut');
    $(event.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hide);

    function hide() {
    event.target.setAttribute("class", "hidden");
    }
    console.log("GAME OVER");
    h2.textContent = "Tonight You Will Dine On:"
    var finalOption = document.querySelector(".foodOption:not(.rollOut)");
    finalOption.setAttribute("class", "final-option");
    finalOption.removeEventListener("click", removeFoodOption);
    var finalHeading = document.querySelector("h1");
    finalHeading.textContent = "IT HAS BEEN DECIDED!";
//add search option
    $(finalOption).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', addSearch);

    function addSearch() {
      var foodType = finalOption.getAttribute("food-type");
      var searchLink = document.createElement("a");
      searchLink.setAttribute("href", "https://www.google.com/#q=" + foodType + "+nearby");
      searchLink.setAttribute("target", "_blank");
      document.querySelector(".allOptions").appendChild(searchLink);
      var search = document.createElement("div");
      search.setAttribute("class", "search");
      search.classList.add('animated');
      search.classList.add('bounceInLeft');

      search.textContent = "🔎 Find " + foodType + " Near You";
      searchLink.appendChild(search);
    }
//add recipes
$(finalOption).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', addRecipe);

function addRecipe() {
  var foodType = finalOption.getAttribute("food-type");
  var recipeLink = document.createElement("a");
  var recipeUrl = finalOption.getAttribute("recipe-link");
  var recipeName = finalOption.getAttribute("recipe-name");
  recipeLink.setAttribute("href", recipeUrl);
  recipeLink.setAttribute("target", "_blank");
  document.querySelector(".allOptions").appendChild(recipeLink);
  var recipe = document.createElement("div");
  recipe.setAttribute("class", "recipe");
  recipe.classList.add('animated');
  recipe.classList.add('bounceInRight');

  recipe.textContent = "Rather Cook? Try This " + recipeName + " Recipe";
  recipeLink.appendChild(recipe);
}





    var startOver = document.createElement("div");
    startOver.setAttribute("class", "shuffle");
    document.querySelector("main").appendChild(startOver);
    newSpan = document.createElement("span");
    newSpan.textContent = "Wanna Try Again?";
    startOver.appendChild(newSpan);
    startOver.addEventListener("click", shuffleFoods);
    }

  else if (turn === 2) {
    $(event.target).addClass('animated fadeOutLeft');
    $(event.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hide);

    function hide() {
    event.target.setAttribute("class", "hidden");
    }
    console.log("player 2 is up!");
    h2.textContent = "Player two, please eliminate the next option"
//Eliminate shuffle after first turn has been taken
    console.log("test!");
    shuffle.setAttribute("class", "hidden");
  }

  else if (turn % 2 === 0) {
    $(event.target).addClass('animated fadeOutLeft');
    $(event.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hide);

    function hide() {
    event.target.setAttribute("class", "hidden");
    }
    console.log("player 2 is up!");
    h2.textContent = "Player two, please eliminate the next option"
  }

  else {
    $(event.target).addClass('animated fadeOutRight');
    $(event.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hide);

    function hide() {
    event.target.setAttribute("class", "hidden");
    }
    console.log("player 1 is up!");
    h2.textContent = "Player one, please eliminate the next option"
  }
  $(finalOption).addClass('animated tada');

}


var options = document.querySelectorAll(".foodOption");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", removeFoodOption);

  }



function shuffleFoods(event) {
  //make all the options class of hidden
//   var foodOptions = document.querySelectorAll(".foodOption");
//   for (var i = 0; i < foodOptions.length; i++) {
//     foodOptions[i].setAttribute("class", "hidden");
//   }
// //display a new set of options with the next 7 items in the array:
//   for (var i = 1; i < 8; i++) {
//     var newDiv = document.createElement("div");
//     newDiv.setAttribute("class", "foodOption");
//     newDiv.style.backgroundColor=randoColors[(7 * shuffleCount) + i];
//     var thisFood = randoFoods[(7 * shuffleCount) + i];
//     newDiv.textContent = thisFood;
//     document.querySelector(".allOptions").appendChild(newDiv);
//     var options = document.querySelectorAll(".foodOption");
//     for (var i = 0; i < options.length; i++) {
//       options[i].addEventListener("click", removeFoodOption);
//
//     }
//   }
//   shuffleCount = shuffleCount + 1;
location.reload();

}


shuffle.addEventListener("click", shuffleFoods);






//OPEN ISSUES:

//Fix search size and text size ISSUES

//Remove underline from search




//Make the game playable for more than 2 players


//Fix animation timing issues





//Turn this into an app

//Add recipe suggestions?






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

  //Add a restart button
    //*Added another shuffle link at the end of the game

//Finish adding emojis
  //*emojis added

  //After a few shuffles, we start running out of colors and eventually run out of food options . . .
  //-less than perfect fix: add more colors and foods to allow more shuffles before running out of options
  //-less than perfect fix: have the whole process start over with a new array on each shuffle(but you would get repeat foods)
    //*Decided to make a shuffle reload the page, having some repeats actually seems like it should be expected behavior.

  //Would be nice to have some animations upon removeFoodOption rather than just having the DIVs dissappear
    //Added animations


  //Could make the messaging if/else statement more concise using modulos
    //*Added modulos to minimize code

  //Make sizes work better on desktop and mobile, perhaps using media queries?
      //*added media queries, still unsure if sizes are optimal


  //Add a 'start over' button at the end
      //*added restart

  //Add a copyright
        //*added a copyright, but not thrilled with the way it looks

  //Animations seem a little slow, can they be sped up?
        //*sped up

//Make search open in new tab
    //*used target="_blank" to make link open in new tab.

//Decide on a color scheme
  //*picked and implemented a color scheme, not in love with it.

  //Make the divs bounce out to opposite sides
   //*changed the animations so that they alternate between left to right
