document.writeln("Class 8 Object");

let person = {
  name: "John",
  age: 30,
  city: "New York",
  sayHello: function () {
    return "Hello " + this.name;
  },
};

document.writeln(person.sayHello() + "<br>");

for (let x in person) {
  document.writeln(x + " : " + person[x] + "<br>");
}
