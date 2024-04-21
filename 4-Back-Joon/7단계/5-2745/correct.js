const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  return parseInt(input[0], parseInt(input[1]));
}

console.log(solution(input));
