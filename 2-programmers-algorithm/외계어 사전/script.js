function solution(spell, dic) {
  return dic.some((x) => [...x].sort().toString() === spell.sort().toString())
    ? 1
    : 2;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
