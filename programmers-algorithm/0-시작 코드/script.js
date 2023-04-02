function solution(array) {
  console.log(array);

  // 어떻게 해야 배열 안에 있는 숫자를 추출할까 ?
  let mostNumber = null;
  let mostLen = 0;

  for (let i = 0; i < array.length; i++) {
    let lists = array.filter((arr) => arr === array[i]);
    console.log(lists);
  }
}

console.log(solution([1, 7, 7, 7, 4, 4]));
