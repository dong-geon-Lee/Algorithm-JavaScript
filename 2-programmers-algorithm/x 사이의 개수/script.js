function solution(myString) {
  console.log(myString.split("x"));
  return myString.split("x").map((x) => (x ? x.length : 0));
}

console.log(solution("oxooxoxxox"));
