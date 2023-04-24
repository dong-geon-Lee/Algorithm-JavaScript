function solution(my_string) {
  const n = my_string.length;
  const words = new Array(n);

  for (let i = 0; i < n; i++) {
    words[i] = my_string.slice(i);
  }

  return words.sort();
}

console.log(solution("banana"));
// *good
