function solution(arr) {
  const lists = arr.sort((a, b) => b - a);

  console.log(
    lists.slice(-4).reduce((acc, cur) => acc + cur),
    lists.slice(0, 4).reduce((acc, cur) => acc + cur)
  );
}

console.log(solution([1, 2, 3, 4, 5]));
