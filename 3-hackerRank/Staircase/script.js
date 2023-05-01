function solution(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = n - i;
    let hashes = i;
    let row = " ".repeat(spaces) + "#".repeat(hashes);
    console.log(row);
  }
}

console.log(solution(4));
