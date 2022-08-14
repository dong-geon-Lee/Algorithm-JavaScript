// 문제:

function mySolution(str) {
  let maxLen = "";

  for (let i = 0; i < str.length; i++) {
    if (maxLen.length < str[i].length) {
      maxLen = str[i];
    }
  }

  return maxLen;
}

let str = ["poly", "math", "developer", "take", "admit"];
console.log(mySolution(str));

function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(str));
