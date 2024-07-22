document.writeln("Class 10" + "<br>");

// for (let a = 1; a <= 10; a++) {
//   if (a % 2 == 0) {
//     document.writeln(a + " :  Even" + "<br>");
//   }
// }

// document.writeln("<br>");

// let b = 1;
// while (b <= 10) {
//   document.writeln(b);
//   b++;
// }

// document.writeln("<br>");

// let c = 11;
// do {
//   document.writeln(c);
//   c++;
// } while (c <= 10);

// document.writeln("<br>");

// let a = prompt("Enter your Number : ");
// for (let i = 1; i <= 10; i++) {
//   document.writeln(a + " * " + i + " = " + a * i + "<br>");
// }

// 2 * 1;
// 2 * 2;
// 2 * 3;
// 2 * 4;

// 2*1=2
// 2*2=4
// 2*3=6

let a = {
  name: "Ganesh",
  age: 28,
  address: "Mathura",
  eyeColor: "Brown",
};

// document.writeln(a.age + " " + a.name);

for (let x in a) {
  document.writeln(x + " : " + a[x] + "<br>");
}

let arr = [1, 32, 45, 32, 56, 76, 443, 23, 78, 98, 54, 33];
// for (let x of arr) {
//   document.writeln(x * 2);
// }

// for (let i = 0; i < arr.length; i++) {
//   document.writeln(arr[i] * 2);
// }

// 5 = 5*4*3*2*1 = 120
