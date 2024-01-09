function solution(s) {
  const Sarr = s.split(" ").map(e => [...e].map((e, i) => {
    if ((i + 1) % 2 === 0) return e.toLowerCase();
    if ((i + 1) % 2 === 1) return e.toUpperCase()
  }).join("")).join(" ");
  return Sarr;
}