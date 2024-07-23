// document.writeln("Class 11");
// 2^4
// 2*2*2*2

// document.writeln("<br>");

// let base = prompt("Enter your base number: ");
// let power = prompt("Enter your power number: ");

// let result = 1;

// for (let i = 1; i <= power; i++) {
//   result = result * base;
// }
// document.writeln(result);
document.writeln("<br>");

// let a = Math.floor(Math.random() * 10);
// document.writeln(a);

function fun(player) {
  let game = ["rock", "paper", "scissor"];

  let computer = game[Math.floor(Math.random() * 3)];
  //   document.getElementById("demo").innerText = computer;
  if (player == computer) {
    document.getElementById("demo").innerText = "tie this game ";
  } else if (
    (player == "rock" && computer == "scissor") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissor" && computer == "paper")
  ) {
    document.getElementById(
      "demo"
    ).innerHTML = `User Win! user chose <b> ${player} </b> and computer chose  <b> ${computer}</b>`;
  } else {
    document.getElementById(
      "demo"
    ).innerHTML = `Computer win! Computer chose <b> ${computer}</b> and User chose <b> ${player} </b>`;
  }
}
