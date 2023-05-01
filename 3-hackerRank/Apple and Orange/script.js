function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const setApples = calcFruit(apples, a, s, t);
  const setOranges = calcFruit(oranges, b, s, t);

  console.log(setApples);
  console.log(setOranges);
}

function calcFruit(fruit, a, s, t) {
  return fruit.map((x) => x + a).filter((x) => x >= s && x <= t).length;
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
