function solution(my_string, indices) {
  return my_string
    .split("")
    .filter((_, idx) => !indices.includes(idx))
    .join("");
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
