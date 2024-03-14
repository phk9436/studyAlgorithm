function solution(code) {
  var answer = [];
  let mode = 0;
  [...code].forEach((e, i) => {
    if (e === "1") {
      mode = 1 - mode;
      return;
    }
    if (mode === 0) {
      if (e !== "1" && i % 2 === 0) {
        answer.push(e);
      } else if (e === "1") {
        mode = 1;
      }
    } else {
      if (e !== "1" && i % 2 === 1) {
        answer.push(e);
      } else if (e === "1") {
        mode = 0;
      }
    }
  })
  if (answer.length === 0) {
    return "EMPTY"
  }
  return answer.join("");
}