// 문제: 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function mySolution(n) {
  let lists = n;
  let minNum = Math.min(...lists);

  return minNum;
}

let numbers = [1000, 2, 3, 4, 5, 6, 7];
console.log(mySolution(numbers));

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
