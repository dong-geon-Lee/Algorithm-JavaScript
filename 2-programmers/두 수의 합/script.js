function solution(a, b) {
  let x = BigInt(a);
  let y = BigInt(b);
  return String(x + y);
}

console.log(solution("18446744073709551615", "287346502836570928366"));
