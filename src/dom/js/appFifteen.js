// using document.querySelector(name)
var headingOne = document.querySelector(".heading__one");
var headingTwo = document.querySelector(".heading__two");
var headingThree = document.querySelector(".heading__three");
var image = document.querySelector(".image");

// using innerHTML, getAttribute(attributeName), setAttribute(attributeName, value), textContent
headingOne.innerHTML = "<h4>Hello JavaScript One!</h4>";
headingTwo.textContent = "<h4>Hello JavaScript Two!</h4>";
headingThree.innerHTML = "<p>Get value of attribute alt: " + image.getAttribute("alt") + "</p>";
image.setAttribute("src", "http://innovativeteams.net/wp-content/uploads/2017/01/jsLogo.png");
