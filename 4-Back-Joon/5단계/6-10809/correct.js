const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

function solution(word) {
  const positions = Array(26).fill(-1);

  for (let i = 0; i < word.length; i++) {
    const idx = word.charCodeAt(i) - "a".charCodeAt(0);
    if (positions[idx] === -1) {
      positions[idx] = i;
    }
  }

  return positions.join(" ");
}

console.log(solution(input));
