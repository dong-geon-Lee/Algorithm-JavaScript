function solution(arr, k) {
  return arr.map((x) => (k % 2 === 1 ? x * k : x + k));
}

console.log(solution([1, 2, 3, 100, 99, 98], 3));
