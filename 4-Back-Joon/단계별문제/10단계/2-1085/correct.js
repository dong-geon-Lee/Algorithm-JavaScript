const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const [x, y, w, h] = input;
  return Math.min(+x, +y, w - x, h - y);
}

console.log(solution(input));
