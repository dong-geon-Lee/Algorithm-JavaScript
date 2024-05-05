const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const maxLen = Math.max(...input.map((x) => x.length));
  const arr = input.map((x) => x.padEnd(maxLen, " ").split(""));
  const results = [];

  for (let i = 0; i < maxLen; i++) {
    let word = "";
    for (let j = 0; j < arr.length; j++) {
      word += arr[j][i];
    }
    results.push(word);
  }

  return results.join("").replace(/ /g, "");
}

console.log(solution(input));
