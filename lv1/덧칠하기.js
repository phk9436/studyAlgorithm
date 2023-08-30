function solution(n, m, section) {
  var answer = 0;
  const arr = Array.from({ length: n }, () => 1);
  section.forEach((e) => arr[e - 1] = 0);
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      i += m - 1;
      answer++;
    }
  }
  return answer;
}