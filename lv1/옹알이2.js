function solution(babbling) {
  var answer = 0;
  const bab = ["aya", "ye", "woo", "ma"];
  babbling.some((e) => {
    bab.some((e2) => {
      if (e.includes(e2.repeat(2))) {
        return true;
      }
      if (e.includes(e2)) {
        e = e.replaceAll(e2, 'X');
      }
    })
    if ([...new Set([...e])].join("") === "X") {
      answer++;
    }
  })
  return answer;
}