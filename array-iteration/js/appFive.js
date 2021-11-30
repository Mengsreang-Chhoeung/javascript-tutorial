// initial value
var numbers = [45, 25, 55, 15, 75];

// using every() and some() method
document.write("Every of Numbers : " + numbers.every(overEighteen) + "<br><br>");
document.write("Some of Numbers : " + numbers.some(overEighteen));

function overEighteen(value, index, array){
	return value > 18;
}
