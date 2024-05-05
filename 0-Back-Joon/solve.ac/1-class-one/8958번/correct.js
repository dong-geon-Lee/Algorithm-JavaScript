const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, arr) {
  const sumLists = [];

  for (let i = 0; i < n; i++) {
    let totals = 0;
    let calculate = 0;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "O") {
        totals += calculate + 1;
        calculate++;
      } else {
        totals += 0;
        calculate = 0;
      }
    }
    sumLists.push(totals);
  }
  return sumLists.join("\n");
}

let [n, ...rest] = input;
console.log(solution(+n, rest));
