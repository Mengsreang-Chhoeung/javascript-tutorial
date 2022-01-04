// using document.querySelector(name)
var content = document.querySelector(".content");

// using firstChild and lastChild to output those value
// using those with nodeName, it will return whitespace: #text
document.write("First child of content: " + content.firstChild.nodeName + "<br>");
document.write("Last child of content: " + content.lastChild.nodeName + "<br>");
