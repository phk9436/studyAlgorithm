
function solution(price, money, count) {
  let n = 0;
  for (let i = 0; i <= count - 1; i++) {
    n = n + price * (i + 1)
  }
  var answer = n - money;

  return answer >= 0 ? answer : 0;
}