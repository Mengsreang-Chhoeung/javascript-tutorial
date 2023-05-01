// initial value
var txt = "Please locate where 'locate' occurs!";

// using indexOf() method
document.write("Index of Txt: " + txt.indexOf("locate") + "<br>");
document.write("Index of Txt: " + txt.indexOf("locate", 15) + "<br>");
document.write("Index of Txt: " + txt.indexOf("john") + "<br><br>");

// using lastIndexOf() method
document.write("Last Index of Txt: " + txt.lastIndexOf("locate") + "<br>");
document.write("Last Index of Txt: " + txt.lastIndexOf("locate", 15) + "<br>");
document.write("Last Index of Txt: " + txt.lastIndexOf("john") + "<br>");
