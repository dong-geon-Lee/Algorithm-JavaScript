const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

function solution(arr) {
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] % 42);
  }

  return [...new Set(results)].length;
}

console.log(solution(input));
