// initial value
var txt = "Please locate where 'locate' occurs!";

// using search() method
document.write("Search of Txt: " + txt.search("locate") + "<br><br>");

// modify value of txt
txt = "The rain in SPAIN stays mainly in the plain";

// using match() method with regular expression
document.write("Match of Txt: " + txt.match(/ain/g) + "<br>");
document.write("Match of Txt: " + txt.match(/ain/gi) + "<br>");
