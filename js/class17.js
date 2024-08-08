document.writeln("Class 17" + "<br>");
var arr = [5, 7, 3, 2];
var max = Math.max.apply(this, arr);
var min = Math.min.apply(this, arr);
document.writeln(max);
document.writeln(min);
