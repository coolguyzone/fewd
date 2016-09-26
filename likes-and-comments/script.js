//INCREASE LIKE COUNTER

//Create a function that increases a variable by 1

var i = 0;
function plusOneLike(event) {
  document.querySelector(".like-count").textContent = ++i;

}

//Link that function to trigger on a click event
var a = document.querySelector("a");
a.addEventListener("click", plusOneLike);


//ADD NEW COMMENT TO THE PAGE

//Create a function that adds a new div comment and sets it's textContent to the textContent of the textarea
function newComment (event) {
  var comment = document.createElement("div");
  comment.setAttribute("class", "comment");
  comment.textContent = document.querySelector("textarea").value;
  var c = document.querySelector(".like");
  c.appendChild(comment);
  //clear the textarea after new comment is posted
  document.querySelector("textarea").value = "";

}

//Lunk that function to trigger on a click event of the button
var b = document.querySelector("button");
b.addEventListener("click", newComment);
