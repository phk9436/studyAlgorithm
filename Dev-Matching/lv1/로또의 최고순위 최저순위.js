function solution(lottos, win_nums) {
  const late = [6,6,5,4,3,2,1];
  let zeroN = 0;
  let winN = 0;
  lottos.forEach((e) => {
      if(e === 0) {
          zeroN ++;
      }
      if(win_nums.includes(e)) {
          winN ++;
      }
  })
  return [late[winN + zeroN], late[winN]];
}