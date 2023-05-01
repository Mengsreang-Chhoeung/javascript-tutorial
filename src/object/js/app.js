var person = {
	id: 1,
	name: "Kok Tola",
	sex: "Male",
	siblings: ["Kok Pisey", "Kok Makara"],
	greeting: function() {
		return `Hello my name's ${person.name}`;
	},
};
// Ouput the value...
document.write("ID: ", person.id, " Name: ", person.name, " Sex: ", person.sex, "<br>");
document.write("Siblings: ", person.siblings[0], " and ", person.siblings[1], "<br>");
document.write("Greeting: ", person.greeting());
