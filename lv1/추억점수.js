function solution(name, yearning, photo) {
  const arr2 = photo.map((e) => {
      let num = 0;
      e.forEach((e2) => {
          if(name.indexOf(e2) !== -1) {
              num += yearning[name.indexOf(e2)]
          }
      })
      return num;
  })
  return arr2;
}