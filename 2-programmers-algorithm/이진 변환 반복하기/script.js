function solution(s) {
  let count = 0;
  let zeroCount = 0;
  let oneCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") zeroCount++;
    else oneCount++;
  }

  while (oneCount !== 1) {
    count++;
    oneCount = oneCount.toString(2).match(/1/g).length;
  }

  return [count, zeroCount];
}

console.log(solution("01110"));
