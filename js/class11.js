document.writeln("Class 11");
// 2^4
// 2*2*2*2

document.writeln("<br>");

let base = prompt("Enter your base number: ");
let power = prompt("Enter your power number: ");

let result = 1;

for (let i = 1; i <= power; i++) {
  result = result * base;
}
document.writeln(result);
