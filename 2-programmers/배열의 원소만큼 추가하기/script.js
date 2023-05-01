function solution(arr) {
  return arr.map((x, i) => Array(x).fill(arr[i])).flat();
}

console.log(solution([10, 1, 2]));
