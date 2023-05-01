// initial value
var numbers = [45, 25, 55, 15, 75];

// using reduce() and reduceRight() method
document.write("Sum of Numbers : " + numbers.reduce(sumUp) + "<br><br>");
document.write("Subtraction of Numbers : " + numbers.reduceRight(subtraction));

function sumUp(total, value, index, array){
	return total + value;
}

function subtraction(total, value, index, array){
	return total - value;
}
