function solution(sizes) {
  const w = [];
  const h = [];
  sizes.forEach((e) => {
    const list = e.sort((a, b) => a - b);
    w.push(list[0]);
    h.push(list[1]);
  })
  return Math.max(...w) * Math.max(...h);
}