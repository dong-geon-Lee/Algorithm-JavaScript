function solution(num_list) {
  const newLists = num_list.map((x) => {
    let count = 0;

    while (x !== 1) {
      count++;
      if (x % 2 === 0) {
        x /= 2;
      } else {
        x = (x - 1) / 2;
      }
    }
    return count;
  });

  return newLists.reduce((acc, cur) => acc + cur);
}

console.log(solution([12, 4, 15, 1, 14]));
