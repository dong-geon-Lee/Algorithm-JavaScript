const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  let arr = input[i].split(" ").join("");
  solution(arr);
}

function solution(testcaseArray) {
  console.log(+testcaseArray[0] + +testcaseArray[1]);
}
