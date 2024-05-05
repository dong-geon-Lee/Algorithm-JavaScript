const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const [str] = input;
  return str.length;
}

console.log(solution(input));
