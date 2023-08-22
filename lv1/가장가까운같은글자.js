function solution(s) {
  const arr = [...s];
  const arr2 = arr.map((e, i) => {
      const str = [...arr].splice(0, i).reverse().join("");
      if(str.indexOf(e) === -1) {
          return -1;
      }
      return str.indexOf(e) + 1;
  })
  return arr2;
}