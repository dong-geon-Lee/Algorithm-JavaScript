function solution(str_list, ex) {
  return str_list.filter((_, i) => !str_list[i].includes(ex)).join("");
}

console.log(solution(["abc", "def", "ghi"], "ef"));
