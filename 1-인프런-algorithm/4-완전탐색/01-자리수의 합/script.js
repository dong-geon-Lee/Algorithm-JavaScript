// 문제:

function solutionMe(n, arr) {
  const results = arr.map((x) => {
    const numberLists = x.toString().split("");
    return numberLists.reduce((acc, cur) => acc + +cur, 0);
  });

  const maxNum = Math.max(...results);
  const answer = [];

  for (let i = 0; i < n; i++) {
    if (results[i] === maxNum) {
      answer.push(arr[i]);
    }
  }

  return Math.max(...answer);
}

function solutionGPT(arr) {
  let maxSum = 0;
  let maxNum = 0;

  arr.forEach((num) => {
    const sum = num
      .toString()
      .split("")
      .reduce((acc, cur) => acc + parseInt(cur), 0);

    if (sum > maxSum || (sum === maxSum && num > maxNum)) {
      maxSum = sum;
      maxNum = num;
    }
  });

  return maxNum;
}

function solutionCourse(str) {
  // 강의 코드
}

console.log(solutionMe(7, [128, 460, 603, 40, 521, 137, 123]));
console.log(solutionGPT(7, [128, 460, 603, 40, 521, 137, 123]));
console.log(solutionCourse(7, [128, 460, 603, 40, 521, 137, 123]));
