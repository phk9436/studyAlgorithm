function solution(quiz) {
  const answer = quiz.map((e) => {
    let susic = e.split(" ");
    if (susic[1] === '+') {
      if (Number(susic[0]) + Number(susic[2]) === Number(susic[4])) {
        return "O"
      }
      return "X"
    }
    if (Number(susic[0]) - Number(susic[2]) === Number(susic[4])) {
      return "O"
    }
    return "X"
  });
  return answer;
}