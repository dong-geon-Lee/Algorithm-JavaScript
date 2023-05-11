function solution(order) {
  const results = order.map((x) => (x.match("cafelatte") ? 5000 : 4500));
  return results.reduce((acc, cur) => acc + cur);
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
);
