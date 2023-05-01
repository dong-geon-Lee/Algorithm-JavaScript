function solution(arr) {
  let x = 0;
  let y = 0;
  let z = 0;

  arr.forEach((n) => {
    if (n > 0) x++;
    else if (n < 0) y++;
    else z++;
  });

  let length = x + y + z;
  let lists = [x, y, z];
  return lists.map((x) => +(x / length).toFixed(length));
}

console.log(solution([-4, 3, -9, 0, 4, 1]));
