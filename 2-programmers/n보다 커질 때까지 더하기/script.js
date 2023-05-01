function solution(numbers, n) {
  return numbers.reduce((acc, cur) => {
    if (acc > n) return acc;
    return acc + cur;
  });
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
