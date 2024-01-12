function solution(n, arr1, arr2) {
  const arr1map = arr1.map(e => e.toString(2)).map(e => [...String(e).padStart(n, "0")]);
  const arr2map = arr2.map(e => e.toString(2)).map(e => [...String(e).padStart(n, "0")]);
  const arr3map = [];
  for (let i = 0; i <= n - 1; i++) {
    let arr = []
    arr1map[i].forEach((e, idx) => {
      (e === "1" || arr2map[i][idx] === "1") ? arr.push("#") : arr.push(" ")
    })
    arr3map.push(arr.join(""));
  }
  return arr3map;
}