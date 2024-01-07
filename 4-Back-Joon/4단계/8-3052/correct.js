const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => +x);

function solution(arr) {
  const answer = [];
  arr.forEach((x) => answer.push(x % 42));
  return [...new Set(answer)].length;
}

console.log(solution(input));
