function solution(n) {
  let arr = [];
  for (let i = 0; i <= n - 1; i++) {
    if (i % 2 === 0) arr.push("수")
    if (i % 2 === 1) arr.push("박")
  }
  return arr.join("");
}