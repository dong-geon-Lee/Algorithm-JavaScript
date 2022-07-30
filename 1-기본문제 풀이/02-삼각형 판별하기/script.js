// 문제: 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로
// 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

function mySolution(a, b, c) {
  let max = Math.max(a, b, c);
  let answer;

  if (max === a) {
    if (b + c > max) {
      answer = true;
    } else {
      answer = false;
    }
  } else if (max === b) {
    if (a + c > max) {
      answer = true;
    } else {
      answer = false;
    }
  } else {
    if (a + b > max) {
      answer = true;
    } else {
      answer = false;
    }
  }

  return answer;
}

console.log(mySolution(3, 18, 18));

function solution(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
