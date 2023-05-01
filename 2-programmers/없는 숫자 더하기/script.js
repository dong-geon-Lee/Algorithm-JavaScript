function solution(numbers) {
  const arr = Array.from({ length: 9 }, (_, i) => i + 1);
  return arr
    .filter((x) => !numbers.includes(x))
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
