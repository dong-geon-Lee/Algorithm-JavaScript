function solution(grades) {
  const result = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 40) {
      result.push(grades[i]);
    } else {
      const nextMultipleOfFive = Math.ceil(grades[i] / 5) * 5;
      if (nextMultipleOfFive - grades[i] < 3) {
        result.push(nextMultipleOfFive);
      } else {
        result.push(grades[i]);
      }
    }
  }

  return result;
}

console.log(solution([73, 67, 38, 33]));
