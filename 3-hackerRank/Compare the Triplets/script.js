function compareTriplets(a, b) {
  let al = 0;
  let bo = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) al++;
    else if (a[i] < b[i]) bo++;
  }

  return [al, bo];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
