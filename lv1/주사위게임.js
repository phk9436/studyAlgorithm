function solution(a, b, c, d) {
  const arr = [a, b, c, d].sort((a, b) => a - b)
  if ([...new Set(arr)].length === 1) {
    return 1111 * arr[0];
  }
  if (arr[0] !== arr[1] && arr[1] === arr[2] && arr[1] === arr[3]) {
    //맨 앞만 다름
    return Math.pow((10 * arr[1] + arr[0]), 2);
  }
  if (arr[3] !== arr[0] && arr[0] === arr[1] && arr[0] === arr[2]) {
    //맨 뒤만 다름
    return Math.pow((10 * arr[1] + arr[3]), 2);
  }
  if (arr[0] === arr[1] && arr[0] !== arr[2] && arr[2] === arr[3]) {
    //두개끼리 같음
    return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
  }
  if ([...new Set(arr)].length === 4) {
    //다 다름
    return arr[0]
  }
  //두개 같고 두개 다름
  const arr2 = arr.filter((e, i) => e === arr[i + 1]);
  const arr3 = arr.filter((e) => e !== arr2[0])
  console.log(arr3)
  return arr3[0] * arr3[1]
}