var d = new Date();
/*
 using setHours(), setMinutes(), setSeconds(), getHours(),
 getMinutes(), and getSeconds()
*/
d.setHours("19");
d.setMinutes("29");
d.setSeconds("19");
document.write("Time: " + (d.getHours() + 1) + ":" + (d.getMinutes() + 1) + ":" + (d.getSeconds() + 1));

