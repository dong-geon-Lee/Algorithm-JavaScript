function solution(numbers, k) {
  let index = 0;
  let count = 0;

  while (true) {
    count++;
    if (count === k) {
      return numbers[index];
    }
    index = (index + 2) % numbers.length;
  }
}

console.log(solution([1, 2, 3, 4, 5, 6], 5));
