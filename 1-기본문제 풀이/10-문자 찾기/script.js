// 문제:

function mySolution(str, w) {
  let answer = 0;

  for (let x of str) {
    if (x === w) answer++;
  }

  return answer;
}

let str = "FRONTEND";
console.log(mySolution(str, "D"));

function solution(str, w) {
  let answer = str.split(w).length - 1;

  return answer;
}

console.log(solution(str, "D"));
