function solution(s) {
  const regEx = s.match(/[a-z]/gi);
  const sLen = s.length === 4 || s.length === 6;
  return sLen && !regEx ? true : false;
}

console.log(solution("a234"));

// *good
