// using document.querySelector(name)
var content = document.querySelector(".content");

// using firstElementChild and lastElementChild to output those value
// using those with nodeName, it will return element and if using those with innerHTML, it will return value
document.write("First element child of content: " + content.firstElementChild.innerHTML + "<br>");
document.write("Last element child of content: " + content.lastElementChild.innerHTML + "<br>");
