function solution(d, budget) {
  let lists = d.sort((a, b) => a - b);
  let total = 0;
  let count = 0;

  for (let i = 0; i < lists.length; i++) {
    if (total + lists[i] > budget) break;
    total += lists[i];
    count++;
  }

  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
