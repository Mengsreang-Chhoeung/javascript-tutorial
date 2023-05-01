// initial value
var person = {
	firstname: "John", 
	lastname: "Doe", 
	age: 25
};

// using for in loop with object
for (var i in person) {
  document.write(i + " : " + person[i] + "<br>");
}
