function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    const str = i.toString();

    if (/^[05]+$/.test(str)) {
      result.push(i);
    }
  }

  if (result.length === 0) return [-1];
  else return result;
}

console.log(solution(5, 555));
