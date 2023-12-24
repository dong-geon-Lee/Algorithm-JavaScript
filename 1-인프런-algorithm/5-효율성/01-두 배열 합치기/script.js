// 문제:

function solutionMe(n1, arr1, n2, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

function solutionGPT(n1, arr1, n2, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  while (i < n1) result.push(arr1[i++]);
  while (j < n2) result.push(arr2[j++]);

  return result;
}

function solutionCourse(str) {
  // 강의 코드
}

let str = "";
console.log(solutionMe(3, [1, 3, 5], 5, [2, 3, 6, 7, 9]));
console.log(solutionGPT(3, [1, 3, 5], 5, [2, 3, 6, 7, 9]));
console.log(solutionCourse());

// ▣ 입력예제 1
// 3
// 1 3 5
// 5
// 2 3 6 7 9
// ▣ 출력예제 1
// 1 2 3 3 5 6 7 9
