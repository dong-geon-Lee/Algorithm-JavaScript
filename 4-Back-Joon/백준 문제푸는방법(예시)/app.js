const fs = require("fs");

let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");

console.log(input, "1");

const testCaseNum = Number(input[0]);
const inputTestCase = [];

for (let i = 1; i <= testCaseNum; ++i) {
  const arr = input[i].split(" ").map((item) => Number(item));
  const newArr = [];

  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i]);
  }

  const testCase = {
    N: arr[0],
    arr: newArr,
  };

  inputTestCase.push(testCase);
}
