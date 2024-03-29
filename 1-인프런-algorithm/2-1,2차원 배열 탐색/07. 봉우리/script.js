// 문제:
// 5 3 7 2 3
// 3 7 1 6 1
// 7 2 5 3 4
// 4 3 6 4 1
// 8 7 3 5 2
// ▣ 출력예제 1
// 10
function mySolution(str) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 행좌표 (방향탐색)
        let ny = j + dy[k]; // 열좌표 (방향탐색)

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

// console.log(mySolution(str));

function solution(arr) {
  // 봉우리 개수
  let answer = 0;

  // 배열의 길이
  let n = arr.length;

  // 상하좌우를 탐색하기 위한 변수 dx,dy 선언
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  //        (0,1)
  // (-1,0) (0,0) (1,0)
  //        (0,-1)
  // dx 행 증가, dy 열 증가

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 봉우리 조건을 만족하면 1
      let flag = 1;

      for (let k = 0; k < 4; k++) {
        // 방향 탐색 행 좌표
        let nx = i + dx[k];
        let ny = j + dy[k];

        console.log(nx, ny);

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }

      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(arr.length);
console.log(solution(arr));
