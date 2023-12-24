// 문제:

function solutionMe(str) {
  const stack = [];

  for (const char of str) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

function solutionGPT(str) {}

function solutionCourse(str) {
  // 강의 코드
}

let str = "(()(()))(()"; // "NO"
let str2 = "(())()"; // "YES"
let str3 = "(()()))"; // "NO"
console.log(solutionMe(str2)); // NO (())(
// console.log(solutionGPT());
// console.log(solutionCourse());
