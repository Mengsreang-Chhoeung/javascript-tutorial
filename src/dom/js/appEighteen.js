// create element using createElement()
var heading = document.createElement("h1");
// create element's text using createTextNode()
var headingText = document.createTextNode("Hello JavaScript");
// append text to heading element using appendChild()
heading.appendChild(headingText);
// append element into body element
document.body.appendChild(heading);