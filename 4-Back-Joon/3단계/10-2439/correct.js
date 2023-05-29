const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(N) {
  let printString = "";

  for (let line = 1; line <= N; line++) {
    for (let i = 0; i < N - line; i++) {
      printString += " ";
    }

    for (let i = 0; i < line; i++) {
      printString += "*";
    }

    if (line !== N) {
      printString += "\n";
    }
  }
  console.log(printString);
}
