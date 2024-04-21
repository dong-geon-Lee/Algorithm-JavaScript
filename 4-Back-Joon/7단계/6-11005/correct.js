const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const decNum = parseInt(input[0], 10);
  const base = parseInt(input[1], 10);
  return decNum.toString(base).toUpperCase();
}

console.log(solution(input));
