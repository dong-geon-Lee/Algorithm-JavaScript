// 문제:
// N*N의  격자판이  주어지면  각  행의 합, 각  열의  합,  두 대각선의  합  중  가  장 큰  합을  출력합니다.
// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제 1
// 155

function mySolution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0;
  let sum2 = 0;

  console.log(arr);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum1 = sum2 = 0;
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }

    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = sum2 = 0;

  for (let i = 0; i < n; i++) {
    // console.log(arr[i][i]);
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }

  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(mySolution(arr));

// function solution(s) {
//   // 코드를 넣으세요
// }

// console.log(solution(arr));
