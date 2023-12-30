const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  let [total, qty, ...items] = input;
  let answers = 0;

  for (let i = 0; i < qty; i++) {
    let [x, y] = items[i].split(" ");
    answers += +x * +y;
  }

  return answers === parseInt(total) ? "Yes" : "No";
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
