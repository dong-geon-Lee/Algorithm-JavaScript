function solution(arr) {
  return arr
    .map((x) => {
      let count = 0;
      while ((x >= 50 && x % 2 === 0) || (x < 50 && x % 2 === 1)) {
        x = x >= 50 ? x / 2 : x * 2 + 1;
        count++;
      }
      return count;
    })
    .reduce((acc, cur) => Math.max(acc, cur));
}

console.log(solution([1, 2, 3, 100, 99, 98]));
