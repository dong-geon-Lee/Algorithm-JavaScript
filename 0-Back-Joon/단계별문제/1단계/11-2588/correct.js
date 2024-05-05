const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num1 = Number(input[0]);
let num2 = input[1];

let multiList = num2.split("").map((x) => Number(x));

function solution(A, B) {
  console.log(A * B[2]);
  console.log(A * B[1]);
  console.log(A * B[0]);
  console.log(A * Number(B.join("")));
}

solution(num1, multiList);
