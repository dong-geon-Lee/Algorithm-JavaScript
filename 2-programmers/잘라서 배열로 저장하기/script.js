function solution(my_str, n) {
  let count = 0;
  let words = [];

  for (let i = 0; i < my_str.length; i += n) {
    count++;
    words.push(my_str.slice(i, n * count));
  }

  return words;
}

console.log(solution("abc1Addfggg4556b", 6));
