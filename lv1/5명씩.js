function solution(names) {
  var answer = [];
  let idx = 0;
  while (idx <= names.length - 1) {
    answer.push(names[idx])
    idx += 5
  }
  return answer;
}