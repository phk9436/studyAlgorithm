function solution(keymap, targets) {
  var answer = [];
  targets.forEach((e) => {
    let score = 0;
    [...e].some((e2) => {
      let arr = []
      keymap.forEach((e3) => {
        const idx = e3.indexOf(e2);
        if (idx !== -1) {
          arr.push(idx + 1);
        }
      })
      if (arr.length === 0) {
        score = -1;
        return true;
      } else {
        score += arr.sort((a, b) => a - b)[0];
      }
    })
    answer.push(score);
  })
  return answer;
}