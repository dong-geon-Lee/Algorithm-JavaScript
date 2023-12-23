// 문제:

function solutionMe(n, arr) {
  const newArr = arr.map((item) => {
    return parseInt(
      item
        .toString()
        .split("")
        .reverse()
        .filter((x) => x !== "0")
        .join("")
    );
  });

  const answer = [];

  for (let i = 0; i < n; i++) {
    const checkNumber = [];

    for (let j = 1; j <= newArr[i]; j++) {
      if (newArr[i] % j !== 0) continue;
      checkNumber.push(j);
    }

    if (checkNumber.length === 2) {
      answer.push(newArr[i]);
    }
  }

  return answer;
}

function solutionGPT(n, arr) {
  // GPT 코드
}

function solutionCourse(n, arr) {
  // 강의 코드
}

let n = 9;
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solutionMe(n, arr)); // 23 2 73 2 3
console.log(solutionGPT(n, arr));
console.log(solutionCourse(n, arr));
