// using document.getElementsByTagName(name)
var heading = document.getElementsByTagName("h1");

// give a color style to those heading one
for (var i = 0; i < heading.length; i++) {
    heading[i].style.color = "green";
}
