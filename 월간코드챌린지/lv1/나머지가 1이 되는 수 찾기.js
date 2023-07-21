function solution(n) {
  let idx = 0;
  for(let i = n; i>=2; i--){
    if(n%i === 1) idx = i;
  }
  var answer = idx;
  return answer;
}