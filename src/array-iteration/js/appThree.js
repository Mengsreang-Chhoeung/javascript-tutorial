// initial value
var numbers = [45, 25, 55, 15, 75];

// using filter() method
document.write("Number over 18 : " + numbers.filter(overEighteen));

function overEighteen(value, index, array){
	return value > 18;
}

