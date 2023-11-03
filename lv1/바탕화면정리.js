function solution(wallpaper) {
  let lux = 51;
  let luy = 51;
  let rdx = 0;
  let rdy = 0;

  wallpaper.forEach((e, i) => {
    const minX = e.indexOf('#');
    const maxX = e.lastIndexOf('#');
    if (luy > minX && minX !== -1) {
      luy = minX;
    }
    if (rdy < maxX + 1) {
      rdy = maxX + 1;
    }
    if (minX !== -1) {
      rdx = i + 1;
    }
  })
  wallpaper.some((e, i) => {
    const x = e.indexOf('#')
    if (x !== -1) {
      lux = i;
      return true;
    }
  })
  return [lux, luy, rdx, rdy];
}