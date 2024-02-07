function solution(common) {
  var answer = 0;
  const [a, b, c] = common;
  if (c - b === b - a) {
    //등차수열
    answer = common.at(-1) + (c - b)
  } else {
    answer = common.at(-1) * (c / b)
  }
  return answer;
}