function equalStacks(h1, h2, h3) {
  let sum1 = h1.reduce((a, b) => a + b, 0);
  let sum2 = h2.reduce((a, b) => a + b, 0);
  let sum3 = h3.reduce((a, b) => a + b, 0);

  let top1 = 0;
  let top2 = 0;
  let top3 = 0;

  while (sum1 !== sum2 || sum2 !== sum3) {
    if (sum1 >= sum2 && sum1 >= sum3) {
      sum1 -= h1[top1++];
    } else if (sum2 >= sum1 && sum2 >= sum3) {
      sum2 -= h2[top2++];
    } else if (sum3 >= sum1 && sum3 >= sum2) {
      sum3 -= h3[top3++];
    }
  }

  return sum1;
}

console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]));
