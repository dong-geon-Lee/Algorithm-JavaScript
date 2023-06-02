function solution(A, B) {
  // if (A === B) return 0;

  // for (let i = 0; i < A.length; i++) {
  //   A = A.slice(-1) + A.slice(0, -1);
  //   if (A === B) return i + 1;
  // }

  // return -1;
  return (B + B).indexOf(A);
}

//* i=0, o + hell = ohell
//* i=1, l + ohel = lohel
//* i=2, l + lohe = llohe

// debugger;
console.log(solution("hello", "llohe")); //* return 3 이 나옴
