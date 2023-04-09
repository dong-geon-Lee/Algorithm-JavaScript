// 문제:

function solution(str) {
  const words = {};

  for (let i = 0; i < str.length; i++) {
    words[str[i]] = words[str[i]] ? words[str[i]] + 1 : 1;
  }

  const uniqueWords = Object.keys(words).filter((x) => words[x] === 1);
  const result = uniqueWords.sort().join("");
  return result;
}

let str = "abcabcadc";
console.log(solution(str));
