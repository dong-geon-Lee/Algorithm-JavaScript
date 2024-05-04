const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let words = str.toLowerCase();
  let obj = {};
  let results = [];
  let maxCount = 0;

  for (let i = 0; i < words.length; i++) {
    obj[words[i]] = obj[words[i]] || 0;
    obj[words[i]]++;
  }

  for (const key in obj) {
    if (maxCount < obj[key]) {
      maxCount = obj[key];
    }
  }

  for (const key in obj) {
    if (maxCount === obj[key]) {
      results.push(key);
    }
  }

  return results.length >= 2 ? "?" : results[0].toUpperCase();
}

console.log(solution(input));
