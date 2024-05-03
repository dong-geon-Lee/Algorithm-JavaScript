const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const [len, ...words] = input;
  for (let i = 0; i < len; i++) {
    console.log(words[i][0] + words[i].at(-1));
  }
}

solution(input);
