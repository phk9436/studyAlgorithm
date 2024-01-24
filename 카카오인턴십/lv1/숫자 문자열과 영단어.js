const obj = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
}
function solution(s) {
  let str = s;
  const values = Object.values(obj);
  const keys = Object.keys(obj);
  values.forEach((e, i) => {
    str = str.replaceAll(e, keys[i])
  })
  var answer = str;
  return parseInt(answer);
}