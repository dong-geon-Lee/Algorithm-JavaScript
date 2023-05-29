const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let str = input[0];

function solution(A) {
  console.log(
    A.split(" ")
    .reduce((acc, cur) => acc + +cur, 0)
  );
}

solution(str);
