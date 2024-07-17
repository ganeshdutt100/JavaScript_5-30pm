document.writeln("Class 8 Object");

// let person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   sayHello: function () {
//     return "Hello " + this.name;
//   },
// };

// document.writeln(person.sayHello() + "<br>");

// for (let x in person) {
//   document.writeln(x + " : " + person[x] + "<br>");
// }

class classNAMe {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

document.writeln("<br>");

let person1 = new classNAMe("John", 30, "Developer");

for (let x in person1) {
  document.writeln(x + " : " + person1[x] + "<br>");
}
