function solution(s) {
  return s.match(/p/gi).length === s.match(/y/gi).length;
  // return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

console.log(solution("Pyyp"));
