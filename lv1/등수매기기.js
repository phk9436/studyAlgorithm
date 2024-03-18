function solution(score) {
  const aver = score.map((e) => (e[0] + e[1]) / 2)
  const averGrade = [...aver].sort((a, b) => b - a)
  var answer = [];
  aver.forEach((e, i) => {
    averGrade.some((e2, i2) => {
      if (e === e2) {
        answer.push(i2 + 1)
        return true
      }
    });
  });
  return answer;
}