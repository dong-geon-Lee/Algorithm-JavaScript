function kangaroo(x1, v1, x2, v2) {
  if (x1 > x2 && v1 >= v2) return "NO";
  if (x1 < x2 && v1 <= v2) return "NO";

  const distance = Math.abs(x1 - x2);
  const speedDiff = Math.abs(v2 - v1);

  if (distance % speedDiff === 0) return "YES";
  else return "NO";
}

console.log(kangaroo(14, 4, 98, 2));
// console.log(kangaroo(0, 3, 4, 2));
