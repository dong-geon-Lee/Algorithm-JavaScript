function solution(arr) {
  return arr.length >= 1 ? arr.filter((x) => x !== Math.min(...arr)) : -1;
}

console.log(solution([4, 3, 2, 1]));
