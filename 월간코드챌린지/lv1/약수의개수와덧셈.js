function solution(left, right) {
  var answer = 0;
  let a = right + 1;
  const arr = Array.from({length: right - left + 1}, () => {
      a--;
      return a;
  })
  let arr2 = []
  arr.forEach((e) => {
      arr2.push([yak(e), e]);
  })
  arr2.forEach((e) => {
      if(e[0] % 2 === 0) {
          answer += e[1];
      } else {
          answer -= e[1];
      }
  })
  return answer;
}
function yak(n) {
  let ans = 0;
  for(let i = 0; i<= Math.sqrt(n); i++) {
      if(n % i === 0 && i) {
          if(i === Math.sqrt(n)) {
              ans++;
          } else {
              ans+=2;
          }
      }
  }
  return ans;
}