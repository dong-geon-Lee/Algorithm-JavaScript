function solution(a, b) {
  let cdn1 = parseInt(String(a) + String(b));
  let cdn2 = 2 * a * b;
  return cdn1 > cdn2 ? cdn1 : cdn2;
}

console.log(solution(2, 91));
