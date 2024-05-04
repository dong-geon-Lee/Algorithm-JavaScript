const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(arr) {
  let setA = arr.slice().sort((a, b) => a - b);
  let setD = arr.slice().sort((a, b) => b - a);
  let resultsA = 0;
  let resultsD = 0;
  let i = 0;

  while (i < 8) {
    if (setA[i] === arr[i]) {
      resultsA++;
    } else if (setD[i] === arr[i]) {
      resultsD++;
    }
    i++;
  }

  return resultsA === 8 ? "ascending" : resultsD === 8 ? "descending" : "mixed";
}

console.log(solution(input));
