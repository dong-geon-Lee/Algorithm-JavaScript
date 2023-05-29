const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((arr) => +arr);

function solution(A, B) {
  if (A < B) {
    console.log("<");
  } else if (A > B) {
    console.log(">");
  } else {
    console.log("==");
  }
}

solution(+input[0], +input[1]);
