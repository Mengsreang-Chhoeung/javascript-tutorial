// create element using createElement()
var heading = document.createElement("h3");
// create element's text using createTextNode()
var headingText = document.createTextNode("Hello JavaScript");
// append text to heading element using appendChild()
heading.appendChild(headingText);
// replace element heading' s text "Hello HTML" to heading' s text "Hello JavaScript" using replaceChild()
var headingHelloHTML = document.querySelector("#heading__helloHTML");
document.body.replaceChild(heading, headingHelloHTML);