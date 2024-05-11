const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(arr) {
  return arr.sort((a, b) => a - b).join("\n");
}

let arr = input.slice(1);
console.log(solution(arr));
