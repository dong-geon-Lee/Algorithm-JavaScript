const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(n) {
  let count = 0;
  let powerOf5 = 5;

  while (n >= powerOf5) {
    count += Math.floor(n / powerOf5);
    powerOf5 *= 5;
  }

  return count;
}

console.log(solution(+input));
