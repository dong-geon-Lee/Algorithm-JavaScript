const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let arr = [...new Set(input.slice(1))];
  console.log(arr);
  let sortedWords = arr.sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b);
    return a.length - b.length;
  });

  return sortedWords.join("\n");
}

console.log(solution(input));
