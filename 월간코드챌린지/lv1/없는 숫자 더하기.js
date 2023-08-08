function solution(numbers) {
  let zeroto = [0,1,2,3,4,5,6,7,8,9];
  let arr = [];
  numbers.forEach(e => {
    const z = zeroto.filter(el => el !== e)
    zeroto = z;
    arr = z;
  })
  var answer = arr.reduce((acc, cur) => acc += cur);
  return answer;
}