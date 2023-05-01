function solution(str1, str2) {
  return str2.split(str1).length > 1 ? 1 : 0;
}

console.log(solution("abc", "aabcc"));
