function solution(balls, share) {
  let result = 1;

  while (share > 0) {
    result = (result * balls) / share;
    balls = balls - 1;
    share = share - 1;
  }

  return Math.round(result);
}

console.log(solution(3, 2));
