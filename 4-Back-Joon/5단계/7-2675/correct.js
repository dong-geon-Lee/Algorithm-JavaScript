const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(testCases) {
  let result = "";

  for (let i = 0; i < testCases.length; i++) {
    const [repeatCount, str] = testCases[i].split(" ");
    let repeatedStr = "";

    for (let j = 0; j < str.length; j++) {
      repeatedStr += str[j].repeat(Number(repeatCount));
    }

    result += repeatedStr + "\n";
  }
  return result;
}

console.log(solution(input.slice(1)));
