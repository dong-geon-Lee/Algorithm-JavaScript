// 문제:

function mySolution(str) {
  return str.toUpperCase();
}

let str = "aAbBcC";
console.log(mySolution(str));

function solution(str) {
  let answer = "";

  for (let x of str) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
}

console.log(solution(str));
