


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
    emoji: "🍲",
    recipelink: "http://pinchofyum.com/thai-yellow-chicken-curry-with-potatoes",
    recipename: "Yellow Chicken Curry"

  },
  {
    name: "Vietnamese",
    category: "vietnamese",
    emoji: "🍜",
    recipelink: "http://www.epicurious.com/recipes/food/views/vietnamese-sandwiches-with-five-spice-chicken-233499",
    recipename: "5-Spice Chicken Ban Mi"
  },
  {
    name: "Mexican",
    category: "mexican",
    emoji: "🇲🇽",
    recipelink: "http://allrecipes.com/recipe/213700/enchiladas-verdes/",
    recipename: "Enchiladas Verdes"
  },
  {
    name: "Burritos",
    category: "mexican",
    emoji: "🇲🇽",
    recipelink: "http://www.foodnetwork.com/recipes/jeff-mauro/carne-asada-burrito-recipe.html",
    recipename: "Carne Asada Burrito"
  },
  {
    name: "Sandwiches",
    category: "sandwiches",
    emoji: "🍞",
    recipelink: "http://allrecipes.com/recipe/219468/shooter-sandwich/",
    recipename: "Shooter Sandwich"
  },
  {
    name: "Pizza",
    category: "italian",
    emoji: "🍕",
    recipelink: "http://ciaoflorentina.com/burrata-pizza-recipe-crispy/",
    recipename: "Burrata Pizza"
  },
  {
    name: "Deep-Dish Pizza",
    category: "italian",
    emoji: "🍕",
    recipelink: "http://www.foodnetwork.com/recipes/emeril-lagasse/chicago-style-deep-dish-pizzas-recipe.html",
    recipename: "Chicago Deep-Dish"
  },
  {
    name: "Dim Sum",
    category: "chinese",
    emoji: "🇨🇳",
    recipelink: "http://www.foodnetwork.com/recipes/brian-boitano/pork-steamed-buns-recipe.html",
    recipename: "Pork Steamed Buns"
  },
  {
    name: "Sushi",
    category: "japanese",
    emoji: "🍣",
    recipelink: "http://allrecipes.com/recipe/228953/california-roll/",
    recipename: "California Roll"
  },
  {
    name: "Ramen",
    category: "japanese",
    emoji: "🍜",
    recipelink: "http://simply-delicious-food.com/pork-belly-ramen/",
    recipename: "Pork Belly Ramen"
  },
  {
    name: "Pho",
    category: "vietnamese",
    emoji: "🍜",
    recipelink: "http://www.epicurious.com/recipes/food/views/quick-pork-pho-51252620",
    recipename: "Quick Pork Pho"
  },
  {
    name: "Steak",
    category: "meat",
    emoji: "🍖",
    recipelink: "http://www.foodnetwork.com/recipes/alton-brown/pan-seared-rib-eye-recipe.html",
    recipename: "Pan Seared Rib-Eye"
  },
  {
    name: "Diner Breakfast",
    category: "breakfast",
    emoji: "🍳",
    recipelink: "http://www.food.com/recipe/cinnamon-french-toast-172268",
    recipename: "Cinnamon French Toast"
  },
  {
    name: "Mediterranean",
    category: "mediterranean",
    emoji: "🍲",
    recipelink: "http://www.thekitchn.com/recipe-beef-kofta-with-tzatziki-229327",
    recipename: "Beek Kofta"
  },
  {
    name: "Gyros",
    category: "mediterranean",
    emoji: "🍖",
    recipelink: "http://www.food.com/recipe/gyros-an-authentic-recipe-for-making-them-at-home-285900",
    recipename: "Authentic Gyros"
  },
  {
    name: "Japanese",
    category: "japanese",
    emoji: "🍱",
    recipelink: "http://www.foodnetwork.com/recipes/tyler-florence/shrimp-and-vegetable-tempura-recipe.html",
    recipename: "Shrimp And Veggie Tempura"
  },
  {
    name: "Acai Bowls",
    category: "raw",
    emoji: "🍌",
    recipelink: "http://www.familylifeinlv.com/2015/04/eat-a-rainbow-acai-bowl-recipe.html",
    recipename: "Rainbow Acai Bowl"
  },
  {
    name: "Rotisserie Chicken",
    category: "chicken",
    emoji: "🍗",
    recipelink: "http://allrecipes.com/recipe/93168/rotisserie-chicken/",
    recipename: "Rotisserie Chicken"
  },
  {
    name: "Food Court",
    category: "variety",
    emoji: "🍛",
    recipelink: "http://www.food.com/recipe/orange-julius-8589",
    recipename: "Orange Julius"
  },
  {
    name: "German",
    category: "german",
    emoji: "🇩🇪",
    recipelink: "http://allrecipes.com/recipe/78117/wienerschnitzel/",
    recipename: "Wienerschnitzel"
  },
  {
    name: "Subs",
    category: "sandwiches",
    emoji: "🍞",
    recipelink: "http://allrecipes.com/recipe/90321/meatball-sandwich/",
    recipename: "Meatball Sub"
  },
  {
    name: "Indian",
    category: "indian",
    emoji: "🇮🇳",
    recipelink: "http://www.food.com/recipe/aloo-palak-indian-potatoes-spinach-108787",
    recipename: "Aloo Palak"
  },
  {
    name: "Curry",
    category: "indian",
    emoji: "🇮🇳",
    recipelink: "http://allrecipes.com/recipe/212721/indian-chicken-curry-murgh-kari/",
    recipename: "Murgh Kari"
  },
  {
    name: "Pasta",
    category: "italian",
    emoji: "🍝",
    recipelink: "http://www.foodnetwork.com/recipes/giada-de-laurentiis/pasta-primavera-recipe.html",
    recipename: "Pasta Primavera"
  },
  {
    name: "Italian",
    category: "italian",
    emoji: "🍝",
    recipelink: "http://www.foodnetwork.com/recipes/giada-de-laurentiis/chicken-cacciatore-recipe.html",
    recipename: "Chicken Cacciatore"
  },
  {
    name: "Burmese",
    category: "chinese",
    emoji: "🍲",
    recipelink: "http://www.thegourmetgourmand.com/burmese-tea-leaf-salad/",
    recipename: "Tea Leaf Salad"
  },
  {
    name: "Jewish Deli",
    category: "deli",
    emoji: "🇮🇱",
    recipelink: "http://toriavey.com/toris-kitchen/2010/05/shiksa-blintzes/",
    recipename: "Cheese Blintz"
  },
  {
    name: "Barbecue",
    category: "meat",
    emoji: "🍖",
    recipelink: "http://allrecipes.com/recipe/92462/slow-cooker-texas-pulled-pork/",
    recipename: "Slow Cooker Pulled Pork"
  },
  {
    name: "Ribs",
    category: "meat",
    emoji: "🍖",
    recipelink: "http://www.epicurious.com/recipes/food/views/southwestern-style-baby-back-ribs-232859",
    recipename: "Southwestern Baby Back Ribs"
  },
  {
    name: "Korean",
    category: "korean",
    emoji: "🍛",
    recipelink: "http://www.epicurious.com/recipes/food/views/sweet-potato-noodles-japchae-353229",
    recipename: "Japchae"
  },
  {
    name: "African",
    category: "african",
    emoji: "🍛",
    recipelink: "http://www.epicurious.com/recipes/food/views/lamb-tagine-with-chickpeas-and-apricots-367761",
    recipename: "Lamb Tagine"
  },
  {
    name: "Fried Chicken",
    category: "chicken",
    emoji: "🍗",
    recipelink: "http://www.foodnetwork.com/recipes/patrick-and-gina-neely/neely-family-spicy-fried-chicken-recipe.html",
    recipename: "Spicy Fried Chicken"
  },
  {
    name: "Salads",
    category: "raw",
    emoji: "🍅",
    recipelink: "http://www.foodnetwork.com/recipes/food-network-kitchens/classic-cobb-salad-recipe.html",
    recipename: "Classic Cobb Salad"
  },
  {
    name: "Seafood",
    category: "seafood",
    emoji: "🐠",
    recipelink: "http://allrecipes.com/recipe/11951/linguine-with-clam-sauce/",
    recipename: "Linguine With Clam Sauce"
  },
  {
    name: "Shrimp",
    category: "seafood",
    emoji: "🍤",
    recipelink: "http://www.eatingwell.com/recipe/252316/shrimp-ceviche",
    recipename: "Shrimp Ceviche"
  },
  {
    name: "Fish",
    category: "seafood",
    emoji: "🐟",
    recipelink: "http://www.epicurious.com/recipes/food/views/pan-seared-swordfish-steaks-with-shallot-caper-and-balsamic-sauce-13647",
    recipename: "Seared Swordfish"
  },
  {
    name: "Fish N' Chips'",
    category: "seafood",
    emoji: "🐠🍟",
    recipelink: "http://www.foodnetwork.com/recipes/paula-deen/beer-battered-fish-and-chips-recipe.html",
    recipename: "Beer-Battered Fish N' Chips"
  },
  {
    name: "Pub Grub",
    category: "irish",
    emoji: "🍺🍗",
    recipelink: "http://www.irishamericanmom.com/2012/12/04/chips-and-curry-sauce/",
    recipename: "Chips And Curry Sauce"
  },
  {
    name: "Caribbean",
    category: "caribbean",
    emoji: "🇵🇷",
    recipelink: "http://cooking.nytimes.com/recipes/1016056-jerk-chicken",
    recipename: "Jerk Chicken"
  },
  {
    name: "Corn Dogs",
    category: "sausages",
    emoji: "🌽🐶",
    recipelink: "http://www.foodnetwork.com/recipes/paula-deen/homemade-mini-corn-dogs-recipe.html",
    recipename: "Mini Corn Dog"
  },
  {
    name: "French",
    category: "french",
    emoji: "🇫🇷",
    recipelink: "http://www.chow.com/recipes/10983-classic-steak-tartare",
    recipename: "Steak Tartare"
  },
  {
    name: "Spanish",
    category: "spanish",
    emoji: "🇪🇸",
    recipelink: "http://allrecipes.com/recipe/213226/tortilla-espanola/?internalSource=hub%20recipe&referringId=17846&referringContentType=recipe%20hub&clickId=cardslot%2023",
    recipename: "Tortilla Espanola"
  },
  {
    name: "Paella",
    category: "spanish",
    emoji: "🇪🇸",
    recipelink: "http://allrecipes.com/recipe/84137/easy-paella/?internalSource=hub%20recipe&referringId=17846&referringContentType=recipe%20hub&clickId=cardslot%204",
    recipename: "Easy Paella"
  },
  {
    name: "Tapas",
    category: "spanish",
    emoji: "🇪🇸",
    recipelink: "http://www.foodnetwork.com/recipes/bobby-flay/patatas-bravas-home-fries-with-roasted-tomato-aioli.html",
    recipename: "Patatas Bravas"
  },
  {
    name: "Soul Food",
    category: "soul food",
    emoji: "🍗",
    recipelink: "http://allrecipes.com/recipe/229853/catfish-po-boy/?internalSource=staff%20pick&referringId=16091&referringContentType=recipe%20hub&clickId=cardslot%203",
    recipename: "Catfish Po Boy"
  },
  {
    name: "Wings",
    category: "chicken",
    emoji: "🍗",
    recipelink: "http://www.foodnetwork.com/recipes/honey-sriracha-chicken-wings-recipe.html",
    recipename: "Honey Sriracha Wings"
  },
  {
    name: "Greek",
    category: "mediterranean",
    emoji: "🍛",
    recipelink: "http://greekfood.about.com/od/eggplant/r/moussaka.htm",
    recipename: "Moussaka With Eggplant"
  },
  {
    name: "Falafel",
    category: "mediterranean",
    emoji: "🇮🇱",
    recipelink: "https://toriavey.com/toris-kitchen/2011/01/falafel/",
    recipename: "Traditional Falafel"
  },
  {
    name: "Greasy Spoon",
    category: "breakfast",
    emoji: "☕️",
    recipelink: "http://www.foodnetwork.com/recipes/food-network-kitchens/classic-club-sandwich-recipe.html",
    recipename: "Classic Club Sandwich"
  }
]

var playerConditions = [
  "is taller",
  "is shorter",
  "has longer hair",
  "has shorter hair",
  "has bigger feet",
  "has smaller feet",
  "is older",
  "is younger",
  "has lighter eyes",
  "has darker eyes",
  "has bigger hands",
  "has smaller hands",
  "has the bigger nose",
  "has the smaller nose"
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
} else{
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

//Change the condition for who is player one:
playerConditionIndex = Math.floor(Math.random() * playerConditions.length);
document.querySelector(".player-condition").textContent = playerConditions[playerConditionIndex];



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
    $(event.target).addClass('animated fadeOutRight not-final');
    $(event.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hide);

    function hide() {
    event.target.setAttribute("class", "hidden");
    }
    console.log("GAME OVER");
    h2.textContent = "Tonight You Will Dine On:"
    var finalOption = document.querySelector(".foodOption:not(.not-final)");
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
    $(event.target).addClass('animated fadeOutLeft not-final');
    $(event.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hide);

    function hide() {
    event.target.setAttribute("class", "hidden");
    }
    console.log("player 2 is up!");
    h2.textContent = "Player two, please eliminate the next option"
//Eliminate shuffle after first turn has been taken
    console.log("test!");
    shuffle.setAttribute("class", "hidden");
//Hide player condition after first turn
    document.querySelector("h3").setAttribute("class", "hidden");
  }

  else if (turn % 2 === 0) {
    $(event.target).addClass('animated fadeOutLeft not-final');
    $(event.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hide);

    function hide() {
    event.target.setAttribute("class", "hidden");
    }
    console.log("player 2 is up!");
    h2.textContent = "Player two, please eliminate the next option"
  }

  else {
    $(event.target).addClass('animated fadeOutRight not-final');
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






//Make the game playable for more than 2 players


//Fix animation timing issues





//Turn this into an app








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

   //Remove underline from search
     //*fixed by targetting the parent div

     //Add recipe suggestions?
       //*added recipes
