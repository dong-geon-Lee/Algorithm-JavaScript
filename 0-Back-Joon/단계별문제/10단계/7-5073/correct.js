const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const results = [];

  for (let i = 0; i < input.length - 1; i++) {
    const [x, y, z] = input[i].split(" ").map(Number);

    if (x + y <= z || y + z <= x || z + x <= y) {
      results.push("Invalid");
    } else if (x === y && y === z) {
      results.push("Equilateral");
    } else if (x !== y && y !== z && z !== x) {
      results.push("Scalene");
    } else {
      results.push("Isosceles");
    }
  }

  return results.join("\n");
}

console.log(solution(input));
