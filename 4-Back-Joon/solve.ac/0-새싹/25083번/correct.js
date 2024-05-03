const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

function solution() {
  return [
    "         ,r'\"7",
    "r`-_   ,'  ,/",
    " \\. \". L_r'",
    "   `~\\/",
    "      |",
    "      |",
  ].join("\n");
}

console.log(solution());
