function rotateLeft(d, arr) {
  for (let i = 0; i < d; i++) {
    const el = arr.shift();
    arr.push(el);
  }

  return arr;
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]));
