function solution(picture, k) {
  var answer = [];
  const arr = picture.map((e) => {
    const el = [...e].map((e2) => {
      return e2.repeat(k);
    })
    return el.join("");
  })
  arr.forEach((e) => {
    for (let i = 1; i <= k; i++) {
      answer.push(e);
    }
  })
  return answer;
}