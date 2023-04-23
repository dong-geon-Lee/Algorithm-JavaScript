function solution(strArr) {
  return strArr.map((el, idx) =>
    (idx + 1) % 2 === 1 ? el.toLowerCase() : el.toUpperCase()
  );
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"]));
