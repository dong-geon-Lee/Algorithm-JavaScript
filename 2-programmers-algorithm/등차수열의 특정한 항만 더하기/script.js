function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}

console.log(solution(3, 4, [true, false, false, true, true]));
