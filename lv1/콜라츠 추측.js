const cola = (n) => {
  if (n === 1) return 1;
  if (n % 2 === 0) return n / 2;
  if (n % 2 === 1) return n * 3 + 1;
};

function solution(num) {
  let isone = false;
  let arr = []
  let i  = 1, n = num;
  for(i; i< 500; i++){
    n = cola(n);
    if(n === 1) isone = true;
    if(isone) arr.push(i);
  }
  var answer = num === 1 ? 0 : isone ? arr[0] : -1;
  return answer;
}