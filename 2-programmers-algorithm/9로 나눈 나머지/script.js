function solution(number) {
  return (
    Array.from(number)
      .map((n) => +n)
      .reduce((acc, cur) => acc + cur) % 9
  );
}

console.log(solution("78720646226947352489"));
