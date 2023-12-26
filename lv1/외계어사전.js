function solution(spell, dic) {
  let isCollect = false;
  dic.forEach(e => {
    const obj = {};
    let arr = []
    if (JSON.stringify([...e].sort().join("")) === JSON.stringify(spell.sort().join(""))) {
      arr = [...e];
    }
    if (arr) {
      arr.forEach(el => {
        obj[`${el}`] = obj[`${el}`] ? obj[`${el}`] + 1 : 1
      })
      Object.values(obj).forEach(e => {
        e === 1 ? isCollect = true : isCollect = false;
      })
    }

  })
  var answer = isCollect ? 1 : 2;
  return answer;
}