// initial value
var numbers = [50, 20, 150, 60, 1110];

// using sort() method to sort number from small to big
document.write(`Sort Numbers: ${numbers.sort(
	function(a, b) {
		return a - b;
	}
)}<br>`);

