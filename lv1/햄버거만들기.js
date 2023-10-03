function solution(ingredient) {
  var answer = 0;
  let stack = [];
  ingredient.forEach((e, i) => {
    stack.push(e);
    if (
      stack.at(-4) === 1 &&
      stack.at(-3) === 2 &&
      stack.at(-2) === 3 &&
      stack.at(-1) === 1
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      answer++;
    }
  });
  return answer;
}
