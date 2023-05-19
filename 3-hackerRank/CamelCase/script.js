function camelcase(s) {
  const regex = new RegExp(/[A-Z]/, "g");
  if (!s.match(regex)) return 1;
  return s.match(regex).length + 1;
}

console.log(camelcase("ab"));
// babab
