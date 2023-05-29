const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((arr) => +arr);

function solution(score) {
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 80 && score <= 89) {
    console.log("B");
  } else if (score >= 70 && score <= 79) {
    console.log("C");
  } else if (score >= 60 && score <= 69) {
    console.log("D");
  } else {
    console.log("F");
  }
}

solution(input[0]);
