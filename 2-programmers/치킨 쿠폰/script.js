function solution(chicken) {
  let result = 0;
  let temp = chicken % 10;
  let answer = Math.floor(chicken / 10);

  result += answer;
  answer += temp;

  while (true) {
    temp = answer % 10;
    answer = Math.floor(answer / 10);
    result += answer;
    if (answer === 0) break;
    answer += temp;
  }

  return result;
}

console.log(solution(100));
