function solution(my_string, queries) {
  let str = [...my_string];
  queries.forEach(([s, e]) => {
    const arr1 = str.slice(0, s).join("");
    const arr2 = str.slice(s, e + 1).reverse().join("");
    const arr3 = str.slice(e + 1).join("");
    str = [...arr1, ...arr2, ...arr3];
  })
  return str.join("");
}