document.writeln("Class 16");

let arr = {
  0: "apple",
  1: "banana",
  2: "cherry",
  length: 3,
};

let newArray = Array.from(arr);
console.log(newArray);

console.log(arr);

// let arr1 = ["apple", "banana", "cherry"];
let arr1 = Array.of("apple", "banana", "cherry");

console.log(arr1);
