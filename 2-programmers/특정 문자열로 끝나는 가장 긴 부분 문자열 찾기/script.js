function solution(myString, pat) {
  const idx = myString.lastIndexOf(pat);
  return myString.slice(0, idx + pat.length);
}

console.log(solution("AbCdEFG", "dE"));
// console.log(solution("AAAAaaaa", "a"));
