// 문제: 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이
// 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

function mySolution(N) {
  let pen = N / 12;

  return Math.ceil(pen);
}

console.log(mySolution(49));

function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));
