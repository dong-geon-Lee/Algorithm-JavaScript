const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  const [x, y] = input;
  const nums = [];

  for (let i = 1; i <= x; i++) {
    if (x % i === 0) nums.push(i);
  }

  return nums[y - 1] !== undefined ? nums[y - 1] : 0;
}

console.log(solution(input));
