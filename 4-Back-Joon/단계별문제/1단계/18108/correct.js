const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let str = input[0];

function solution(A) {
  const number = Number(A);
  console.log(number - 543);
}

solution(str);
