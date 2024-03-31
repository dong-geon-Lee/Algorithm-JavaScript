function solution(n, words) {
  console.log(n, words);

  const answer = [];
  const copyWords = words.slice();

  const filteredWords = copyWords.flatMap((word, index) => {
    const endStr = word.at(-1); //* 홀수는 마지막 단어
    const firstStr = word.slice(0, 1); //* 짝수는 첫번쨰 단어
    const collect = [];
    // console.log(endStr, index + 1, (index + 1) % 2 === 0);

    if ((index + 1) % 2 === 0) {
      console.log(firstStr, "짝수", word);
      collect.push(firstStr);
    } else {
      console.log(endStr, "홀수", word);
      collect.push(endStr);
    }

    return collect;
  });

  console.log(filteredWords, "??");
  // 틀린 사람이 없으면 [0,0]을 반환한다.
  // 위치는 인덱스값 + 1을 해준다.
  // 기본 return값 형식 -> [n번쨰 사람,n번째 단어]
  // 전체 배열 리스트에서 끝말잇기를 틀리는 단어를 찾는다.
  // 전체 배열 리스트에서 중복되는 경우를 찾는다.
  // 전체배열 중 각 n번의 사람의 배열을 만든다.
  // ex) 1번 사람의 배열 리스트, 2번 사람의 배열 리스트...
  // 틀린 단어를 보유하고 있는 사람을 찾고 그 단어를 가지고 있는 사람을 순회하면 된다.
  // 첫번쨰: 배열을 filter or find or findIndex 등으로 순회하면서 단어를 추출해라.

  return answer;
}

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);

// solution(2	,["hello", "one", "even", "never", "now", "world", "draw"])
