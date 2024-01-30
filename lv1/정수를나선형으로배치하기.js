function solution(n) {
  let arr = Array.from({ length: n }, () => Array(n).fill(0))
  let nowN = 1;
  let dir = "r";
  let x = 0;
  let startX = 0;
  let lastX = n - 1;
  let y = 0;
  let startY = 1;
  let lastY = n - 1;
  while (nowN <= n * n) {
    if (dir === "r") {
      arr[y][x] = nowN;
      nowN++;
      if (x >= lastX) {
        lastX--;
        y++;
        dir = "d"
        continue;
      }
      x++;
      continue;
    }
    if (dir === "d") {
      arr[y][x] = nowN;
      nowN++;
      if (y >= lastY) {
        lastY--;
        dir = 'l'
        x--;
        continue;
      }
      y++;
      continue;
    }
    if (dir === "l") {
      arr[y][x] = nowN;
      nowN++;
      if (x === startX) {
        startX++;
        dir = 'u';
        y--;
        continue;
      }
      x--;
      continue;
    }
    if (dir === 'u') {
      arr[y][x] = nowN;
      nowN++;
      if (y <= startY) {
        startY++;
        dir = 'r';
        x++;
        continue;
      }
      y--;
      continue;
    }
  }
  return arr;
}