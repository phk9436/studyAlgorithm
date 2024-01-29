
function solution(dots) {
  function par(a, b) {
    return Math.abs(a[1] - b[1]) / Math.abs(a[0] - b[0]);
  }
  if (par(dots[0], dots[2]) === par(dots[1], dots[3])) return 1;
  if (par(dots[0], dots[1]) === par(dots[2], dots[3])) return 1;
  if (par(dots[0], dots[3]) === par(dots[1], dots[2])) return 1;
  return 0;
}