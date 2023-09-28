function solution(s, skip, index) {
  const arr = Array.from({ length: 26 }, () => 0);
  const arr2 = arr.map((e, i) => i + 97).map((e) => String.fromCharCode(e));
  const arr3 = arr2.filter((e) => !skip.includes(e));
  const answer = [...s]
    .map((e) => {
      if (!arr3.includes(e)) return e;
      let idx = (arr3.join("").indexOf(e) + index) % arr3.length;
      return arr3[idx];
    })
    .join("");
  return answer;
}
