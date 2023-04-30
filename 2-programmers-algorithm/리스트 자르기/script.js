function solution(n, slicer, num_list) {
  let answer = [];

  switch (n) {
    case 1:
      answer.push(num_list.slice(0, slicer[1] + 1));
      break;
    case 2:
      answer.push(num_list.slice(slicer[0], num_list.length));
      break;
    case 3:
      answer.push(num_list.slice(slicer[0], slicer[1] + 1));
      break;
    case 4:
      let lists = num_list.slice(slicer[0], slicer[1] + 1);
      answer.push(lists.filter((_, i) => (i + 1) % 2 === 1));
    default:
      break;
  }

  return answer[0];
}

console.log(solution(2, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
