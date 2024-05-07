const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const arr = input.slice(0, input.length - 1);
  const answers = [];

  for (let i = 0; i < arr.length; i++) {
    let existWords = arr[i];
    let fallWords = "";

    for (let j = existWords.length - 1; j >= 0; j--) {
      fallWords += existWords[j];
    }

    existWords === fallWords ? answers.push("yes") : answers.push("no");
  }

  return answers.join("\n");
}

console.log(solution(input));
