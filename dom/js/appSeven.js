// using document.getElementsByClassName(name)
var heading = document.querySelectorAll(".heading");

// give a new value to the first header one
heading[0].innerHTML = "Hello Kok";

// give a color style to those heading one
for (var i = 0; i < heading.length; i++) {
    heading[i].style.color = "red";
}
