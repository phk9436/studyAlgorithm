function solution(arr, k) {
  var answer = [];
  const arr2 = [...new Set([...arr])];
  if (arr2.length >= k) {
    for (let i = 0; i < k; i++) {
      answer.push(arr2[i]);
    }
  } else {
    for (let i = arr2.length; i < k; i++) {
      arr2.push(-1);
      answer = arr2;
    }
  }
  return answer;
}