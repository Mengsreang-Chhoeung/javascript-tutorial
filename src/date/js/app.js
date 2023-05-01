var d = new Date();
var month = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec",
];  
// using setFullYear() and getFullYear()
d.setFullYear("2020");
document.write("Year: " + d.getFullYear() + "<br><br>");

// using setMonth() and getMonth()
d.setMonth("3");
document.write("Month: " + month[d.getMonth()] + "<br>");