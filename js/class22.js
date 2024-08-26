// let a = 1;
// let b = 2;

// document.writeln(a, "", b);

// for (let a = 0; a <= 100; a++) {
//   document.writeln(a);
// }

// document.writeln("<br>");

// let b = 10;
// while (b <= 100) {
//   document.writeln(b);
//   b++;
// }

// document.writeln("<br>");

// let i = 20;
// do {
//   document.writeln(i);
//   i++;
// } while (i <= 10);

// let a = [10, 20, 30, 40];

// for (let i = 0; i < a.length; i++) {
//   document.writeln(a[i]);
// }

// for (let x of a) {
//   document.writeln(x);
// }

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// for (let i = 0; i < people.length; i++) {
//   document.writeln(person.name);
// }

for (let x in person) {
  document.writeln(x + " " + person[x]);
}
