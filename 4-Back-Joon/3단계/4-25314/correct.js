const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const [num] = input;
  const answers = [];

  console.log(+num);

  for (let i = 1; i < num / 4; i++) {}

  const data = parseInt(num / 4) ? "long" : "";
  console.log(data);
  // 4의 배수
}

solution(input); // long int

// const input2 = fs.readFileSync(filePath).toString().split(" ");
// const input3 = fs
//   .readFileSync(filePath)
//   .toString()
//   .split(" ")
//   .map(function (a) {
//     return +a;
//   });
