function solution(d, budget) {
  var answer = 0;
  let cash = 0;
  const arr = d.sort((a, b) => a - b)
  arr.some((e) => {
    if (cash + e > budget) return true;
    cash += e;
    answer++;
  })
  return answer;
}