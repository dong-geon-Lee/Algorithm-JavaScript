function solution(q, r, code) {
  let result = "";

  for (let i = r; i < code.length; i += q) {
    result += code[i];
  }

  return result;
}

console.log(solution(3, 1, "qjnwezgrpirldywt"));
