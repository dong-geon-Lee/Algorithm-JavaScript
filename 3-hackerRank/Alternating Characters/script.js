function alternatingCharacters(s) {
  let results = [];

  s.split(" ").forEach((str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) count++;
    }
    results.push(count);
  });

  return results[0];
}

console.log(
  alternatingCharacters("AAAA")
  // alternatingCharacters(["AAAA", "BBBBB", "ABABABAB", "BABABA", "AAABBB"])
);
