function solution(my_string, alp) {
  console.log(my_string, alp);
  return my_string.replace(alp, alp.toUpperCase());
}

console.log(solution("programmers", "p"));
