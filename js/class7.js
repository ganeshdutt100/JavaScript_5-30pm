document.writeln("class 7");
// function greet(name) {
//   document.writeln(`Hello, ${name}!`);
// }
// greet("Pankaj");

document.writeln("<br>");

function Emp(id, name) {
  this.id = id;
  this.name = name;
}

function pEmp(id, name, salary) {
  this.salary = salary;
  Emp.call(this, id, name);
}
function TEmp(id, name, salary) {
  pEmp.call(this, id, name, salary);
}

let a = new pEmp(1, "xyz", 10000);
let b = new TEmp(12, "dsafas", 827387);

// for (let x in a) {
//   document.writeln(x + " : " + a[x]);
//   document.writeln("<br>");
// }

// document.writeln(a.id, " :  ", a.name, " : " + a.salary);
// document.writeln("<br>");

// document.writeln(b.id, " :  ", b.name, " : " + b.salary);
