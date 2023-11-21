function solution(arr, divisor) {
  let arrr = [];
  arr.forEach(e => {
    if (e % divisor === 0) arrr.push(e)
  })
  var answer = arrr.length ? arrr.sort((a, b) => a - b) : [-1];
  return answer;
}