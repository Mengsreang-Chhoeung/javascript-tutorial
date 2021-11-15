// initial value
var txt = "Hello world, welcome to the universe.";

// using includes() method
document.write("Include of Txt: " + txt.includes("world") + "<br>");
document.write("Include of Txt: " + txt.includes("world", 12) + "<br><br>");

// using startsWith() method
document.write("StartsWith of Txt: " + txt.startsWith("Hello") + "<br>");
document.write("StartsWith of Txt: " + txt.startsWith("world", 6) + "<br><br>");

// using endsWith() method
document.write("EndsWith of Txt: " + txt.endsWith("universe.") + "<br>");
document.write("EndsWith of Txt: " + txt.endsWith("welcome", 20) + "<br>");
