const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  let results = [];

  for (let i = 0; i < input.length; i++) {
    let output = [];

    for (let j = 1; j <= input[i]; j++) {
      if (input[i] % j === 0) output.push(j);
    }

    const totals = output.pop();
    const process = output.join(" + ");
    const calculate = process.split("+").reduce((acc, cur) => acc + +cur, 0);

    if (totals !== undefined) {
      if (parseInt(totals) === calculate) {
        results.push(`${totals} = ${process}`);
      } else {
        results.push(`${totals} is NOT perfect.`);
      }
    }
  }

  return results.join("\n");
}

console.log(solution(input));
