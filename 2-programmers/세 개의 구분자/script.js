function solution(myStr) {
  const answer = myStr.split(/a|b|c/).filter((x) => x.length !== 0);
  return answer.length === 0 ? ["EMPTY"] : answer;
}

console.log(solution("baconlettucetomato"));
