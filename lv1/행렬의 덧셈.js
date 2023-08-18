function solution(arr1, arr2) {
  const arr3 = arr1.map((e1, i1) => {
    return e1.map((e2, i2) => {
      return e2 + arr2[i1][i2]
    })
  })
  var answer = arr3;
  return answer;
}