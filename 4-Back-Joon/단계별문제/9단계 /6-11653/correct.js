const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(n) {
  const factors = [];
  let divisor = 2;

  while (n > 1) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    divisor++;
  }

  return factors.join("\n");
}

console.log(solution(input));
