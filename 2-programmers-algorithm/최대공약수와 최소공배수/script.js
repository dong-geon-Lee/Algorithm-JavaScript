function solution(n, m) {
  let max = Math.max(n, m);
  let min = Math.min(n, m);
  let count = min;
  let numLists = [];

  while (count !== 0) {
    if (max % count === 0 && min % count === 0) numLists.push(count);
    count--;
  }

  let leftNum = Math.max(...numLists);
  if (leftNum === 1) return [leftNum, max * min];
  return [leftNum, leftNum * (min / leftNum) * (max / leftNum)];
}

console.log(solution(40, 100));
