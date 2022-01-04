// using document.querySelector(name)
var paraTwo = document.querySelector(".para_two");

// using previousSibling and nextSibling, and we using it multiple time to skip whitespace
paraTwo.previousSibling.previousSibling.style.color = "red";
paraTwo.nextSibling.nextSibling.style.color = "violet";
