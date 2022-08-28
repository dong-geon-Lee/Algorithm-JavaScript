// 문제:

function mySolution(arr1, arr2) {
  let len = arr1.length || arr2.length;

  for (let i = 0; i < len; i++) {
    if (arr1[i] > arr2[i]) {
      let ex1 = arr1[i] === 3 && arr2[i] === 1;

      ex1 ? console.log("B") : console.log("A");
    } else if (arr1[i] < arr2[i]) {
      let ex2 = arr2[i] === 3 && arr1[i] === 1;

      ex2 ? console.log("A") : console.log("B");
    } else {
      console.log("D");
    }
  }
}

let arr1 = [2, 3, 1, 2, 3]; // A B A A D
let arr2 = [1, 1, 3, 1, 3];
console.log(mySolution(arr1, arr2));

function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D ";
    else if (a[i] === 1 && b[i] === 3) answer += "A ";
    else if (a[i] === 2 && b[i] === 1) answer += "A ";
    else if (a[i] === 3 && b[i] === 2) answer += "A ";
    else answer += "B ";
  }

  return answer;
}
console.log(solution(arr1, arr2));
