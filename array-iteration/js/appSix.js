// initial value
var numbers = [45, 25, 55, 15, 75];

// using includes() and find() and findIndex() method
document.write("Includes of Numbers : " + numbers.includes(15) + "<br>");
document.write("Find of Numbers : " + numbers.find(overEighteen) + "<br>");
document.write("Find Index of Numbers : " + numbers.findIndex(overEighteen) + "<br>");

function overEighteen(value, index, array){
	return value > 18;
}
