function solution(arr) {
  const startIdx = arr.indexOf(2);
  const lastIdx = arr.lastIndexOf(2);
  if (startIdx === -1) return [-1];
  return arr.slice(startIdx, lastIdx + 1);
}

console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
