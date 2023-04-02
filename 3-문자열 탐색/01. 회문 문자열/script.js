// 문제: 회문 문자열

function mySolution(str) {
  let words = str.slice().toLowerCase();
  let newWords = "";
  for (let i = words.length - 1; i >= 0; i--) {
    newWords += words[i];
  }

  if (words === newWords) return "YES";
  else return "NO";
}

let str = "gooG";
console.log(mySolution(str));

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return "NO";
  }

  return answer;
}

console.log(solution(str));

function solution2(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

console.log(solution2(str));
