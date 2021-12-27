var d = new Date();
var day = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];  
// using setDate and getDate()
d.setDate("27");
document.write("Date: " + d.getDate() + "<br><br>");

// using setDay() and getDay()
d.setMonth("4");
document.write("Month: " + day[d.getDay()] + "<br>");