function solution(arr) {
  return arr.map((x) => {
    if (x >= 50 && x % 2 === 0) {
      return x / 2;
    } else if (x < 50 && x % 2 === 1) {
      return x * 2;
    } else {
      return x;
    }
  });
}

console.log(solution([51, 12, 99, 100, 99, 98]));
