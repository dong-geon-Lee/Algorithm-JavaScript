function solution(board) {
  const n = board.length;
  const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
  const dy = [0, 0, -1, 1, -1, 1, -1, 1];

  let safeCount = 0;

  // 보드의 각 칸을 순회하면서 지뢰가 없는 경우 주변의 칸을 확인하여 안전한지 여부를 판단합니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        // 현재 칸이 지뢰가 없는 경우
        let isSafe = true;
        for (let k = 0; k < 8; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
            // 주변에 지뢰가 있는 경우 해당 칸은 위험지역입니다.
            isSafe = false;
            break;
          }
        }
        if (isSafe) {
          // 안전한 칸의 수를 증가시킵니다.
          safeCount++;
        }
      }
    }
  }

  return safeCount;
}

// 예시 입력
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 출력: 16

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
); // 출력: 13

console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); // 출력: 0
