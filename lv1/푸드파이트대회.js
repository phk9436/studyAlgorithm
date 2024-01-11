function solution(food) {
  var answer = '';
  let str1 = '';
  food.shift();
  food.forEach((e, i) => {
    for (let a = 0; a < Math.floor(e / 2); a++) {
      str1 += i + 1;
    }
  })
  answer += str1;
  answer += '0';
  answer += [...str1].reverse().join("");
  return answer;
}