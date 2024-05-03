const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

function solution(input) {
  return 84 + "\n" + "pre8248";
}

console.log(solution(input));
