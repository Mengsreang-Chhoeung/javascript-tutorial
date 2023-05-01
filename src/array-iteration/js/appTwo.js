// initial value
var numbers = [45, 25, 55, 15, 75];

// using map() method
document.write("Number * 10 : " + numbers.map(multiplyNumber));

function multiplyNumber(value, index, array){
	return value * 10;
}

