
var i = 0;

function addTodo(event) {
  var newLi = document.createElement("li");
  document.querySelector("ul").appendChild(newLi);

  var newLabel = document.createElement("label");
  newLi.appendChild(newLabel);

  var newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");
  newLabel.appendChild(newInput);

  var newSpan = document.createElement("span");
  newSpan.textContent = document.querySelector(".textInput").value;
  newSpan.style.marginLeft = 4 + "px";
  newLabel.appendChild(newSpan);

  document.querySelector(".Nothing").style.display = "none";
  document.querySelector(".textInput").value = "";
  document.querySelector(".todoNumber").textContent =  ++i;
}

var a = document.querySelector("button");
a.addEventListener("click", addTodo);
