function solution(k, m, score) {
  var answer = 0;
  const arr = score.sort((a, b) => b - a);
  let arr2 = Array.from({ length: Math.ceil(score.length / m) }, () => []);
  arr.forEach((e, i) => {
    const idx = Math.floor(i / m);
    arr2[idx].push(e);
  });
  const arr3 = arr2.filter((e) => e.length === m).map((e) => e.at(-1) * m);
  if (arr3.length === 0) return 0;
  answer = arr3.reduce((acc, cur) => acc += cur);
  return answer;
}