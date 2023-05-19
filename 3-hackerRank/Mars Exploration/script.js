function marsExploration(s) {
  let alteredCount = 0;

  for (let i = 0; i < s.length; i += 3) {
    if (s[i] !== "S") {
      alteredCount++;
    }
    if (s[i + 1] !== "O") {
      alteredCount++;
    }
    if (s[i + 2] !== "S") {
      alteredCount++;
    }
  }

  return alteredCount;
}

console.log(marsExploration("SOS SOS SSS OSO IEI SOS POI SOS IUS ISO")); // 14
