document.writeln("Class 6");
document.writeln("<br>");

// function fun() {
//   document.writeln("Hello world!");
// }

// document.writeln(fun());

// let funName = function () {
//   console.log("Hello world!");
//   ("Hello world!");
// };

let fun = function (a, b) {
  return a + b;
};

let output = fun(10, 50);
document.writeln(fun(90, 50));

document.writeln(output);
