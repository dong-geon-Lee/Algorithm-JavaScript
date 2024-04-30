const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function findKeyWithMinValue(obj) {
  let minKey = null;
  let minValue = Infinity;

  for (const key in obj) {
    if (obj[key] < minValue) {
      minKey = key;
      minValue = obj[key];
    }
  }

  return minKey;
}

function solution(input) {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(" ");
    obj1[a] = (obj1[a] || 0) + 1;
    obj2[b] = (obj2[b] || 0) + 1;
  }

  const keyWithMinValue1 = findKeyWithMinValue(obj1);
  const keyWithMinValue2 = findKeyWithMinValue(obj2);

  return `${keyWithMinValue1} ${keyWithMinValue2}`;
}

console.log(solution(input));
