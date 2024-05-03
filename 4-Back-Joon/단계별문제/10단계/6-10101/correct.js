const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  let oneValue = [...new Set(input)];
  let obj = {};

  for (let i = 0; i < input.length; i++) {
    obj[input[i]] = (obj[input[i]] || 0) + 1;
  }

  let sameValue = Object.values(obj).some((x) => x === 2);
  let total = input.reduce((acc, cur) => acc + cur, 0);

  if (total !== 180) return "Error";

  if (total === 180 && oneValue[0] === 60 && oneValue.length === 1) {
    return "Equilateral";
  }

  if (total === 180 && sameValue) {
    return "Isosceles";
  }

  return "Scalene";
}

console.log(solution(input));
