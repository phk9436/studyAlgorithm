function solution(chicken) {
  var answer = 0;
  let coupon = 0;
  while (chicken > 0 || coupon >= 10) {
    if (coupon >= 10) {
      answer++;
      coupon -= 10;
    }
    answer += Math.floor(chicken / 10);
    coupon += parseInt(((chicken / 10) - Math.floor(chicken / 10)) * 10);
    chicken = Math.floor(chicken / 10);
    if (coupon >= 10) {
      chicken += 10;
      coupon -= 10;
    }
  }
  return answer;
}