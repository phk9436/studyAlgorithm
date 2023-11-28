const numberObj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0
}

function solution(numbers) {
  const string = Object.keys(numberObj).join("|");
  const regExp = new RegExp(string, "g");
  var answer = numbers.replace(regExp, e => numberObj[e]);
  return Number(answer);
}