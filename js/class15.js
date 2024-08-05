document.writeln("Class 15");

let a = [10, 34, 76, 89, 67, 43, 23];

// let output = a.every((x) => x % 2 == 0);
// let output = a.some((x) => x % 2 == 0);
// let output = a.filter((x) => x % 2 != 0);
// let output = a.find((x) => x % 2 == 0);
let output = a.findIndex((x) => x % 2 == 0);

console.log(output);

// let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

// for (let ouputArr of arr.entries()) {
//   console.log(ouputArr);
// }

// console.log(arr);

// list 67
//  list 29
// list 36
// list 44
// list 52
