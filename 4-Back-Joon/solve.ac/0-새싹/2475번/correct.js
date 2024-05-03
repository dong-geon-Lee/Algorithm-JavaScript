const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur ** 2, 0) % 10;
}

console.log(solution(input));
