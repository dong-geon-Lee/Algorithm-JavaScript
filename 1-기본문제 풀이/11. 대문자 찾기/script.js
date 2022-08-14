// 문제: 대문자 찾기

function mySolution(str) {
  let answer = 0;
  let lower = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (lower[i] !== str[i]) answer++;
  }

  return answer;
}

let str = "KoKooo";
console.log(mySolution(str));

function solution(str) {
  let answer = 0;

  for (let x of str) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

console.log(solution(str));
