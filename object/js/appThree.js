var person = {
	id: 1,
	name: "Kok Tola",
	sex: "Male",
	siblings: ["Kok Pisey", "Kok Makara"],
	greeting: function() {
		return `Hello my name's ${person.name}`;
	},
};
// Using for...in loop to output the whole object...
for (let obj in person) {
	// Output the value...
	document.write(obj, " : ", person[obj], "<br>");
}
