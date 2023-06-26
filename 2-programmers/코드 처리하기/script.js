function solution(code) {
  let words = "";
  let mode = 0;

  Array.from(code).forEach((x, i) => {
    if (mode === 0) {
      if (x !== "1" && i % 2 === 0) words += x;
      else if (x === "1") mode = 1;
    } else if (mode === 1) {
      if (x !== "1" && i % 2 === 1) words += x;
      else if (x === "1") mode = 0;
    }
  });

  return words.length === 0 ? "EMPTY" : words;
}

console.log(solution("abc1abc1abc")); // "acbac"
