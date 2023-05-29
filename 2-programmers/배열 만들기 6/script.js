function solution(A, B) {
  if (A === B) return 0;

  let str = "";
  let i = 0;

  return str.slice(-1) + str.slice(0, A.length - 1) === B ? 1 : -1;
}

console.log(solution("hello", "ohell"));
