// initial value
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// using splice() method
fruits.splice(2, 0, "Lemon", "Kiwi");
document.write("Splice Fruits: " + fruits + "<br><br>");
// add and remove
fruits.splice(4, 2, "Coconut", "Cherry");
document.write("Splice Fruits: " + fruits + "<br><br>");
// remove
fruits.splice(0, 1);
document.write("Splice Fruits: " + fruits + "<br><br>");
