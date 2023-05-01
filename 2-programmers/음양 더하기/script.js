function solution(absolutes, signs) {
  return absolutes
    .map((a, i) => (signs[i] === true ? a : -a))
    .reduce((acc, cur) => acc + cur);
}

console.log(solution([4, 7, 12], [true, false, true]));
