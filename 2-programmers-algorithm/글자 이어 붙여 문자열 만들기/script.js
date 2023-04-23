function solution(my_string, index_list) {
  return index_list.map((idx) => my_string[idx]).join("");
}

console.log(solution("zpiaz", [1, 2, 0, 0, 3]));
