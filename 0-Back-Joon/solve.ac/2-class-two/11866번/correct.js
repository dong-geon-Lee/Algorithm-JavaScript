const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(N, K) {
  const result = [];
  const people = [];
  let index = 0;

  for (let i = 1; i <= N; i++) {
    people.push(i);
  }

  while (people.length > 0) {
    index = (index + K - 1) % people.length;
    result.push(people.splice(index, 1)[0]);
  }

  return `<${result.join(", ")}>`;
}

const N = parseInt(input[0]);
const K = parseInt(input[1]);
console.log(solution(N, K));
