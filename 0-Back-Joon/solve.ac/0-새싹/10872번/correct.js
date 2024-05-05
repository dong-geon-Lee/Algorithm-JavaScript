const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(filePath).toString();

function solution(num) {
  let total = 1;
  while (num > 0) {
    total *= num;
    num--;
  }
  return total;
}

console.log(solution(input));
