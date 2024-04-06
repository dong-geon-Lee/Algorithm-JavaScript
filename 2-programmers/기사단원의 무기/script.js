function solution(number, limit, power) {
  const divisorCount = new Array(number + 1).fill(0);

  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      divisorCount[j]++;
    }
  }

  let ironWeight = 0;
  for (let i = 1; i <= number; i++) {
    const attackPower = divisorCount[i] <= limit ? divisorCount[i] : power;
    ironWeight += attackPower;
  }

  return ironWeight;
}

console.log(solution(10, 3, 2)); // 출력: 21
