//! 문제: 틀림

function mySolution(arr) {
  let answer = [];

  arr.reduce((acc, cur) => {
    if (acc < cur) answer.push(cur);
    return cur;
  }, 0);

  return answer;
}

// let str = [7, 3, 9, 5, 6, 12];
let str = [5, 6, 12, 7, 3, 9]; // 5 12 7 9
console.log(mySolution(str));

function solution(s) {
  let answer = [];
  answer.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] < s[i]) answer.push(s[i]);
  }

  return answer;
}

console.log(solution(str));
