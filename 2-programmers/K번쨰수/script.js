function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    const [x, y, z] = commands[i];
    answer.push(array.slice(x - 1, y).sort((a, b) => a - b)[z - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
// [5, 6, 3]
