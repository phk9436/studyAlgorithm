function solution(t, p) {
  const AT = [...t]
  let start = 0;
  let AT2 = []
  while(start <= AT.length - p.length) {
    AT2.push([...AT].splice(start, p.length).join(""));
    start = start += 1
  }
  var answer = AT2.filter((e) => Number(e) <= Number(p)).length;
  return answer;
}