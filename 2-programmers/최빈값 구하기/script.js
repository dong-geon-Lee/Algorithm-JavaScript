function solution(array) {
  const obj = {};

  array.forEach((key) => {
    obj[key] = (obj[key] || 0) + 1;
  });

  let countMax = Math.max(...Object.values(obj));
  let answer = 0;
  let duplicate = 0;

  for (const [key, values] of Object.entries(obj)) {
    if (values === countMax) {
      answer = +key;
      duplicate++;
    }
  }

  return duplicate >= 2 ? -1 : answer;
}

console.log(solution([2, 2, 2, 3, 3, 3, 1, 5, 5, 5, 5]));
