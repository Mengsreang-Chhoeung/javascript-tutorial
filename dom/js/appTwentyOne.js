// create element using createElement()
var heading = document.createElement("h3");
// create element's text using createTextNode()
var headingText = document.createTextNode("Hello JavaScript");
// append text to heading element using appendChild()
heading.appendChild(headingText);
// prepend element into the first element of body element using prepend()
document.body.prepend(heading);
// output heading text using innerText
document.write(`<h3 style="color: red;">${heading.innerText}</h3>`);