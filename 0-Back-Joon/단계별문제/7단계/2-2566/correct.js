const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

function solution(input) {
  let maxNumber = -1;
  let maxRow = -1;
  let maxCol = -1;

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] > maxNumber) {
        maxNumber = input[row][col];
        maxRow = row + 1;
        maxCol = col + 1;
      }
    }
  }

  return `${maxNumber}\n${maxRow} ${maxCol}`;
}

console.log(solution(input));
