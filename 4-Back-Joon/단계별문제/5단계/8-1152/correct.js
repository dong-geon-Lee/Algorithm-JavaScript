const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let words = str.split(" ");
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") count++;
  }

  return count;
}

console.log(solution(input));
