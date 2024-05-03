const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

function solution(arr) {
  return Math.abs(arr[0] - arr[1]);
}

console.log(solution(input));
