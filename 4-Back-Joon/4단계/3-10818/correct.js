const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  let [n, arr, t] = input;
}

console.log(solution(input));

// const input2 = fs.readFileSync(filePath).toString().split(" ");
// const input3 = fs
//   .readFileSync(filePath)
//   .toString()
//   .split(" ")
//   .map(function (a) {
//     return +a;
//   });
