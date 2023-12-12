

function solution(arr) {
  if (arr.length < arr[0].length) {
    const arr2 = [];
    for (let i = 1; i <= arr[0].length; i++) {
      arr2.push(0);
    }
    for (let i = arr.length; i < arr[0].length; i++) {
      arr.push(arr2);
    }
    return arr;
  }
  if (arr[0].length < arr.length) {
    const arr2 = arr.map((e) => {
      for (let i = 1; i <= arr.length - arr[0].length; i++) {
        e = [...e, 0]
      }
      return e;
    });
    return arr2;
  }
  return arr;
}