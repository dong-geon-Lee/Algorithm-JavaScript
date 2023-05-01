function solution(s) {
  const isPM = s.indexOf("PM") !== -1;
  const isAM = s.indexOf("AM") !== -1;

  let hour = parseInt(s.slice(0, 2));
  let minute = s.slice(3, 5);
  let second = s.slice(6, 8);

  if (isPM && hour !== 12) hour += 12;
  else if (isAM && hour === 12) hour = 0;

  hour = hour < 10 ? "0" + hour : hour;
  return `${hour}:${minute}:${second}`;
}

console.log(solution("04:59:59AM"));
