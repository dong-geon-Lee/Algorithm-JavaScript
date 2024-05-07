const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(n) {
  let count = 0;
  let number = 666;

  while (true) {
    if (number.toString().includes("666")) {
      count++;
      if (count === n) return number;
    }
    number++;
  }
}

console.log(solution(+input));
