function solution(strings, n) {
  var answer = [];
  const arr = strings.map((e) => e[n]).sort()
  const arr2 = [...new Set(arr)]
  arr2.forEach((e, i) => {
    const arr3 = []
    strings.forEach((e2, i2) => {
      if (e2[n] === e) {
        arr3.push(e2)
      }
    })
    arr3.sort()
    answer = [...answer, ...arr3.sort()]
  })
  return answer;
}