// initial value
var txt = "Apple, APPLE, apple, Apple, APPLE, apple";

// using replace method
document.write("Replace of Txt: " + txt.replace("Apple", "Orange") + "<br>");
document.write("Replace of Txt: " + txt.replace(/Apple/i, "Orange") + "<br>");
document.write("Replace of Txt: " + txt.replace(/Apple/g, "Orange")+ "<br>");
document.write("Replace of Txt: " + txt.replace(/Apple/gi, "Orange")+ "<br>");

// using toUpperCase and toLowerCase method
document.write("Uppercase of Txt: " + txt.toUpperCase() + "<br>");
document.write("Lowercase of Txt: " + txt.toLowerCase() + "<br>");
