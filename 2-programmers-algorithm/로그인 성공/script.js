function solution(id_pw, db) {
  const [id, pwd] = id_pw;
  const obj = Object.fromEntries(db);

  return obj[id] === pwd
    ? "login"
    : !Object.keys(obj).includes(id)
    ? "fail"
    : "wrong pw";
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
