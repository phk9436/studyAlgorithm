function solution(s) {
  const arr = [...s];
  const map = arr.map(e => e.charCodeAt(0)).sort((a, b) => b - a);
  const maptoSt = map.map(e => String.fromCharCode(e));
  return maptoSt.join("");
}