function solution(today, terms, privacies) {
  const arr1 = terms.map((e) => e.split(" "))
  const arr2 = privacies.map((e) => e.split(" ")).map((e) => [e[0].split("."), e[1]])
  const date1 = new Date(today);
  const arr3 = arr2.map((e) => {
    arr1.forEach((e2) => {
      if (e2.includes(e[1])) {
        e = [e[0], Number(e2[1])]
      }
    })
    return e;
  })
  const arr4 = arr3.map((e) => {
    e[0][1] = Number(e[0][1]) + e[1]
    if (e[0][1] > 12) {
      e[0][0] = `${Number(e[0][0]) + Math.floor((e[0][1] - 1) / 12)}`
      e[0][1] = `${(Number(e[0][1]) - 1) % 12 + 1}`
    }
    const date = new Date([e[0][0], `0${e[0][1]}`.slice(-2), e[0][2]].join("."))
    const nowDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1).getDate();
    if (nowDate > 28) {
      date.setDate(29 - nowDate)
    }
    return date
  })
  const arr5 = arr4.map((e, i) => {
    if (e.getTime() <= date1.getTime()) {
      return i + 1
    }
    return false;
  }).filter((e) => e)
  return arr5;
}