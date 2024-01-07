const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => +x);

function solution(arr) {
  const lists = Array.from({ length: 30 }, (_, i) => i + 1);
  const results = lists.filter((list) => !arr.includes(list));
  return results.join("\n");
}

console.log(solution(input));
