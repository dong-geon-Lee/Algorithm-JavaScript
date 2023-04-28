function solution(sides) {
  const [x, y] = sides;
  const max = Math.max(x, y);
  const min = Math.min(x, y);
  const lists = [];

  for (let i = max - min + 1; i <= max; i++) {
    lists.push(i);
  }

  for (let i = max + 1; i < x + y; i++) {
    lists.push(i);
  }

  return lists.length;
}

console.log(solution([11, 7]));
