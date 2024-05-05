const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

function solution(str) {
  let results = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Z]/g)) {
      results += str[i].replace(/[A-Z]/g, str[i].toLowerCase());
    } else if (str[i].match(/[a-z]/g)) {
      results += str[i].replace(/[a-z]/g, str[i].toUpperCase());
    }
  }

  return results;
}

console.log(solution(input));
