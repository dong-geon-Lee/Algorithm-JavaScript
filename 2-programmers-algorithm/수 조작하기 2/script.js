function solution(numLog) {
  let result = "";
  let curNum = numLog[0];

  for (let i = 1; i < numLog.length; i++) {
    const diff = numLog[i] - numLog[i - 1];

    if (diff === 1) {
      result += "w";
      curNum += 1;
    } else if (diff === -1) {
      result += "s";
      curNum -= 1;
    } else if (diff === 10) {
      result += "d";
      curNum += 10;
    } else if (diff === -10) {
      result += "a";
      curNum -= 10;
    }
  }

  return result;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
