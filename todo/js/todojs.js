
function addTodo() {
  var newLi = document.createElement("li");
  document.querySelector("ul").appendChild(newLi);

  var newLabel = document.createElement("label");
  newLi.appendChild(newLabel);

  var newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");
  newLabel.appendChild(newInput);

  var newSpan = document.createElement("span");
  newSpan.textContent = "Eggs, Motherfucker!";
  newSpan.style.marginLeft = 4 + "px";
  newLabel.appendChild(newSpan);


}

addTodo();
