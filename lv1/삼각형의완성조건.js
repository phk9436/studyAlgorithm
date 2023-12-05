function solution(sides) {
  var answer = 0;
  sides.sort((a, b) => a - b);
  for (let i = 1; i <= sides[1]; i++) {
    if (sides[0] + i > sides[1]) {
      answer++;
    }
  }
  let i = sides[1] + 1;
  while (sides[0] + sides[1] > i) {
    answer++;
    i++;
  }
  return answer;
}