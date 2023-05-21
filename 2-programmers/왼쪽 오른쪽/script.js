function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "l") return arr.slice(0, i);
    if (arr[i] === "r") return arr.slice(i + 1);
  }
  return [];
}

console.log(solution(["r", "l"]));

// 추가 테스트 케이스 3개 : [”u”, “d”] ⇒ [] / [”u”, “l”, “d”] ⇒ [”u”] / [”u”, “r”, “d”] ⇒ [”d”]
