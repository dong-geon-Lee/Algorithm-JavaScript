const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  let [a, b, c] = input.map((n) => parseInt(n)).sort((a, b) => a - b);

  if (a + b > c) {
    return a + b + c;
  } else {
    return 2 * (a + b) - 1;
  }
}

console.log(solution(input));
