function solution(strArr) {
  return strArr.filter((_, i) => !strArr[i].includes("ad"));
}

console.log(solution(["and", "notad", "abcd"]));
