// using document.querySelector(name)
var headingOne = document.querySelector(".heading__one");
var headingTwo = document.querySelector(".heading__two");

// using className
headingOne.className = "headingColor headingBorder headingUnderline";

// using classList
headingTwo.classList.add("headingColor", "headingBorder", "headingUnderline");