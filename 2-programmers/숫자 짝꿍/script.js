function solution(x, y) {
  const frequencyX = Array(10).fill(0);
  const frequencyY = Array(10).fill(0);

  for (const digit of x) frequencyX[digit]++;
  for (const digit of y) frequencyY[digit]++;

  console.log(frequencyX);
  console.log(frequencyY);

  let result = "";
  for (let i = 9; i >= 0; i--) {
    result += String(i).repeat(Math.min(frequencyX[i], frequencyY[i]));
    console.log(result);
  }

  if (result.length === 0) return "-1";
  if (result[0] === "0") return "0";
  return result;
}

solution("12321", "42531");
