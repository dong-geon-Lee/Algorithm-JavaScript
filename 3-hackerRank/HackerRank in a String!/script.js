function hackerrankInString(s) {
  let words = "hackerrank";
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (words[index] === s[i]) index++;
    if (words.length === index) return "YES";
  }

  return "NO";
}

console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"));
