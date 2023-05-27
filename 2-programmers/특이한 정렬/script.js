function solution(numlist, n) {
  const result = numlist.sort((a, b) => {
    const distanceA = Math.abs(a - n);
    const distanceB = Math.abs(b - n);

    if (distanceA === distanceB) {
      return b - a;
    } else {
      return distanceA - distanceB;
    }
  });

  return result;
}

console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); // [36, 40, 20, 47, 10, 6, 7000, 10000]
