function solution(my_string) {
  const str = Array(58).fill(0);
  for (let x of my_string) str[x.charCodeAt() - 65]++;
  str.splice(26, 6);
  return str;
}

console.log(solution("Programmers"));
