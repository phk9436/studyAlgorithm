function solution(seoul) {
  let n = 0;
  seoul.forEach((e, i) => {
    if (e === "Kim") n = i;
  });
  return `김서방은 ${n}에 있다`;
}