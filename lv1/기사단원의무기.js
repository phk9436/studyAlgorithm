function solution(number, limit, power) {
  var answer = 0;
  for(let i = 1; i <= number; i++) {
      const yakN = yak(i);
      if(yakN > limit) {
          answer+=power;
          continue;
      }
      answer+=yakN
  }
  return answer;
}

function yak(n) {
  let num = 0;
  for(let i = 1; i <= Math.sqrt(n); i++) {
      if(n % i === 0) {
          num++;
          if(Math.sqrt(n) !== i) num++;
      }
  }
  return num;
}