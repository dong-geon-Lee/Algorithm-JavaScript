// 1 2
// 3;

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arr = input[0].split(" ");

let A = +arr[0];
let B = +arr[1];

function solution(A, B) {
  console.log(A + B);
}

solution(A, B);
