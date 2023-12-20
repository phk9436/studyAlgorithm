function solution(arr, queries) {
  var answer = [];
  queries.forEach(([s, e, k]) => {
    const arr2 = arr.slice(s, e + 1).sort((a, b) => a - b);
    let isChked = false;
    arr2.some((e2, i) => {
      if (e2 > k) {
        answer.push(e2);
        isChked = true;
        return true;
      }
    })
    if (!isChked) answer.push(-1)
  })
  return answer;
}