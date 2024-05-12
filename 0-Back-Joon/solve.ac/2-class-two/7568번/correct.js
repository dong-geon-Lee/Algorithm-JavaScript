const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, arr) {
  const people = arr.map((line) => line.split(" ").map(Number));
  const ranks = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
        ranks[i]++;
      }
    }
  }

  return ranks.join(" ");
}

let N = +input[0];
let arr = input.slice(1);
console.log(solution(N, arr));
