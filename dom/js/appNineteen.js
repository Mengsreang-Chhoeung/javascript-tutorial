// create element using createElement()
var heading = document.createElement("h3");
// create element's text using createTextNode()
var headingText = document.createTextNode("Hello JavaScript");
// append text to heading element using appendChild()
heading.appendChild(headingText);
// insert element before heading' s text "Hello HTML" using insertBefore()
var headingHelloHTML = document.querySelector("#heading__helloHTML");
document.body.insertBefore(heading, headingHelloHTML);