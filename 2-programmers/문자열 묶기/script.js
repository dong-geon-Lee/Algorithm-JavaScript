function solution(strArr) {
  const arr = Array(31).fill(0);
  for (let x of strArr) arr[x.length]++;
  return Math.max(...arr);
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
