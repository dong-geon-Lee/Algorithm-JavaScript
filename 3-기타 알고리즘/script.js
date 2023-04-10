//* 정렬 할 떄, 내가 생각하는 방식
function sort(arr) {
  const arrLen = [...arr];
  const newArr = [];

  for (let x = 0; x < arrLen.length; x++) {
    const minNum = Math.min(...arr);
    const index = arr.findIndex((arr) => arr === minNum);
    newArr.push(minNum);
    arr.splice(index, 1);
  }
}

sort([23, 45, 6, 12, 13]);

//? MDN sort() 사용 방식
function solution(str1, str2) {
  return str2.length - str1.length;
}

let datas = ["steal", "gold", "ace", "nakamara", "apples"];
console.log(datas.sort(solution));
console.log(datas.sort((a, b) => b.length - a.length));

// ! 강의에서 제안하는 방식
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// debugger;
// let temp = arr[j];
// arr[j] = arr[j + 1];
// arr[j + 1] = temp;
bubbleSort([37, 45, 29, 8]);
