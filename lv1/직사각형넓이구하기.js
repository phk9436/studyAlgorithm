function solution(dots) {
  let maxX = -255;
  let minX = 255;
  let maxY = -255;
  let minY = 255;
  dots.forEach(([x, y]) => {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  })
  const width = maxX - minX;
  const height = maxY - minY;
  return width * height;
}