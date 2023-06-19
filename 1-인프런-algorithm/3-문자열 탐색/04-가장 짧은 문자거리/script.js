// 문제:

function mySolution(s, t) {
  let answer = [];
  let p = 1000;

  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  console.log(answer, p);

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      console.log(answer[i], p, Math.min(answer[i], p));
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let s = "teachermode";
let t = "e";
console.log(mySolution(s, t)); // 1  0  1  2  1  0  1  2  2  1  0

function solution(s) {
  // 코드를 넣으세요
}

console.log(solution(s, t));
