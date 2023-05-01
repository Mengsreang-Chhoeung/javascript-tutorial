// using document.querySelector(name)
var content = document.querySelector(".content");
var paraTwo = document.querySelector(".para_two");
console.log(content.childNodes);

// using nodeValues and textContent
document.write("NodeValues: " + content.firstElementChild.childNodes[0].nodeValue + "<br>");
document.write("TextContent: " + paraTwo.textContent + "<br>");
