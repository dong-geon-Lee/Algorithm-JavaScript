function solution(s) {
  if (!s.search("AWS")) return s;

  const lists = s.split("AWS");

  if (lists.join("").includes("AWS")) {
    const words = [...new Set(lists.join("").split("AWS").join(""))].join("");
    return words;
  } else {
    return -1;
  }
}

console.log(solution("AWAWSSG"));
