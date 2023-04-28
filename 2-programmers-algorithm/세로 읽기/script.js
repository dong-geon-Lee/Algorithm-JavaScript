function solution(my_string, m, c) {
  let words = "";
  for (let i = 0; i < my_string.length; i += m) {
    words += my_string.slice(i, i + m)[c - 1];
  }
  return words;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
