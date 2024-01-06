const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  let [n, arr, t] = input;
  let arrData = arr.split(" ");
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (arrData[i] === t) answer++;
  }

  return answer;
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
