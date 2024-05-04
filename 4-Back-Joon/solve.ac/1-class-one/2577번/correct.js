const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(arr) {
  let obj = {};
  let str = arr.reduce((acc, cur) => acc * cur, 1).toString();
  let i = 0;

  while (i <= 9) {
    obj[i] = 0;
    i++;
  }

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] || 0;
    obj[str[i]]++;
  }

  return Object.values(obj).join("\n");
}

console.log(solution(input));
