function solution(arr, n) {
  return arr.map((x, i) => (i % 2 === 0 ? x + n : x));
}

console.log(solution([49, 12, 100, 276, 33], 27));
// *good
