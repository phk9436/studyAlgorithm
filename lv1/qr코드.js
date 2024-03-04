function solution(q, r, code) {
  var answer = [];
  [...code].forEach((e, i) => {
    if (i % q === r) {
      answer.push(e);
    }
  });
  return answer.join("");
}