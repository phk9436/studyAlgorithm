function solution(balls, share) {
  const factorial = (n) => {
    let returnArr = [];
    for (let i = 1; i <= n; i++) {
      returnArr.push(i);
    }
    return returnArr.reduce((acc, cur) => acc * cur, 1);
  };
  var answer = factorial(balls) / (factorial(balls - share) * factorial(share));
  return Number(answer.toFixed(0));
}