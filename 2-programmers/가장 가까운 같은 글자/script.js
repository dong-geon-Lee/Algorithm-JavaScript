function solution(s) {
  return [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
// console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
