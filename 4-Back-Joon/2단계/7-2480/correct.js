const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number); // 문자열을 숫자로 변환

function solution(input) {
  const allSameNum = 10000;
  const arr = [...new Set(input)];

  // 모두 다른 경우
  if (arr.length === 3) {
    const maxNum = Math.max(...arr);
    return maxNum * 100;
  }

  // 두 개가 같은 경우
  if (arr.length === 2) {
    let one = 0;
    let two = 0;

    for (let i = 0; i < input.length; i++) {
      if (arr[0] === input[i]) one++;
      else if (arr[1] === input[i]) two++;
    }

    if (one > two) return 1000 + arr[0] * 100;
    else return 1000 + arr[1] * 100;
  }

  // 모두 같은 눈이 나온 경우
  if (arr.length === 1) {
    return allSameNum + arr[0] * 1000;
  }
}

console.log(solution(input));
