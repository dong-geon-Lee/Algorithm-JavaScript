const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let arr1 = input[1].split(" ").map(Number);
  let arr2 = input[3].split(" ").map(Number);
  const set = new Set(arr1);
  const results = arr2.map((num) => (set.has(num) ? 1 : 0));

  return results.join("\n");
}

console.log(solution(input));
