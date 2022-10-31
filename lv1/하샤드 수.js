function solution(x) {
  let jari = 0;
  [...`${x}`].forEach(e => jari = jari + Number(e));
  var answer = x % jari === 0 ? true : false;
  return answer;
}