function solution(array, n) {
  let closest = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (
      Math.abs(element - n) < Math.abs(closest - n) ||
      (Math.abs(element - n) === Math.abs(closest - n) && element < closest)
    ) {
      closest = element;
    }
  }
  return closest;
}

console.log(solution([19, 15, 14], 13));
