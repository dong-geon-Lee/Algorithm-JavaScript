function solution(strings, n) {
  let sortedWords = strings
    .map((s) => s.slice(n, n + 1))
    .sort((a, b) => {
      if (a < b) return -1;
      else if (a === b) {
        strings.sort();
      } else return 1;
    });

  let results = [];

  console.log(sortedWords);

  sortedWords.forEach((x, i) => {
    results.push(...strings.filter((s) => s[n] === x));
  });

  return [...new Set(results)];
}

// console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
