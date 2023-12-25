// 문제:

function solutionMe(str) {
  let stack = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      stack.pop();
    } else {
      if (stack.length === 0) {
        result += str[i];
      }
    }
  }

  return result;
}

function solutionGPT(str) {}

function solutionCourse(str) {
  // 강의 코드
}

console.log(solutionMe("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

// 입력예제 1
// (A(BC)D)EF(G(H)(IJ)K)LM(N)
// ▣ 출력예제 1
// EFLM
