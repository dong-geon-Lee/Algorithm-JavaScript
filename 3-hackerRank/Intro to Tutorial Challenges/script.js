function introTutorial(V, arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === V) return mid;
    else if (arr[mid] > V) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}

console.log(introTutorial(4, [1, 4, 5, 7, 9, 12]));
