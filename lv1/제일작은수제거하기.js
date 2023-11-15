function solution(arr) {
  const arrr = [...arr].sort((a, b) => a - b);
  let arrs = [];
  arrr.splice(0, 1);
  arr.forEach(e => {
    const fil = arrr.filter(el => el === e);
    if (fil.length) arrs.push(fil[0]);
  })
  return arrs.length ? arrs : [-1];
}