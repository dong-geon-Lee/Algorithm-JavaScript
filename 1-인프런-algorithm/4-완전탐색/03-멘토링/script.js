// 문제:

function solutionMe(test) {
  let answer = 0;
  let tmp = [];

  m = test.length;
  n = test[0].length;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;

      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;

        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }

        if (pi < pj) cnt++;
      }

      if (cnt === m) {
        tmp.push([i, j]);
        answer++;
      }
    }
  }

  return answer;
}

function solutionGPT(arr) {
  // GPT 코드
}

function solutionCourse(arr) {
  // 강의 코드
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solutionMe(arr));
console.log(solutionGPT(arr));
console.log(solutionCourse(arr));
