function solution(absolutes, signs) {
  const arr = signs.map((e, i) => {
    if(e) return absolutes[i];
    if(!e) return 0 - absolutes[i]
  });
  var answer = arr.reduce((acc, cur) => acc += cur);
  return answer;
}