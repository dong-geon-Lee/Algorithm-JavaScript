const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(str, arr) {
  const [N, M] = str.split(" ");
  const leftArr = arr.slice(0, N);
  const rightArr = arr.slice(N);
  let words = "";

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      words += +leftArr[i].split(" ")[j] + +rightArr[i].split(" ")[j] + " ";
    }
    if (M - 1 !== i) words += "\n";
  }
  return words;
}

let firstLine = input[0];
let rest = input.slice(1);
console.log(solution(firstLine, rest));
