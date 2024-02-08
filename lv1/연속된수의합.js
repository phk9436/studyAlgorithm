function solution(num, total) {
  var answer = [];
  let now = Math.ceil(1000 / num);
  while (true) {
    let nowNum = 0;
    let arr = [];
    for (let i = now; i > now - num; i--) {
      nowNum += i
      arr.push(i);
    }
    if (nowNum === total) {
      answer = arr.reverse();
      break;
    }
    now--;

  }
  return answer;
}