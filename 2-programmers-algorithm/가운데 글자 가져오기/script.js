function solution(s) {
  let index = Math.ceil(s.length / 2);
  return s.length % 2 === 1 ? s[index - 1] : s[index - 1] + s[index];
}

console.log(solution("qwer"));
