// 문제: 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
// 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

function mySolution(arr) {
  let oddNum = arr.filter((arr) => arr % 2 !== 0);

  let sumOdd = oddNum.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  let minNum = Math.min(...oddNum);

  return [sumOdd, minNum];
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(mySolution(arr));

function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }

  answer.push(sum, min);

  return answer;
}

console.log(solution(arr));
