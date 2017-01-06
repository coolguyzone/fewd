



var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["♠️","♣️","♥️","♦️"];







// function newCard() {
//   for (var i = 0; i < suits.length; i++) {
//     for (var j = 0; j < numbers.length; j++) {
//       var newDiv = document.createElement("div");
//       newDiv.setAttribute("class", "card");
//       document.querySelector("main").appendChild(newDiv);
//       var newNumber = document.createElement("span");
//       newNumber.textContent = numbers[j] + suits[i];
//       newDiv.appendChild(newNumber);
//     }
//   }
// }

function newCard() {
  for (var i = 0; i < 5; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "card");
    document.querySelector("main").appendChild(newDiv);
    var newNumber = document.createElement("span");
    newNumber.textContent = numbers[Math.floor(Math.random() * numbers.length)] + suits[Math.floor(Math.random() * suits.length)];
    newDiv.appendChild(newNumber);
  }
}




  document.querySelector("button").addEventListener("click", newCard);
