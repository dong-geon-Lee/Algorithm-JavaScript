// ! 솔루션 1
function mySolution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) ++answer[i];
    }
  }

  console.log(answer);
}

let str = [80, 20, 50, 60, 100];
console.log(mySolution(str));

// ! 솔루선 2
function solution1(arr) {
  console.log(arr);
  const arr_ = arr.map((i) => console.log(arr.filter((j) => i < j).length + 1));

  arr.map((i) => arr.filter((j) => i < j).length);

  console.log(arr_);
}

// ! 솔루선 3
function solution2(arr) {
  const answer = [];

  const copy = arr.slice();

  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    answer.push(arr.indexOf(copy[i]) + 1);
  }

  return answer;
}
