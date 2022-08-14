//! 문제:틀림
// for (let i = 0; i < str.length; i++) {
// }

function mySolution(str) {
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (i === str.indexOf(str[i])) answer += str[i];
  }
  return answer;
}

let str = "asks"; // cejk
console.log(mySolution(str));

function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}

console.log(solution(str));
