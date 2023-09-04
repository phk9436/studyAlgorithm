function solution(babbling) {
  var answer = 0;
  const arr = ["aya", "ye", "woo", "ma"];
  babbling.forEach((e) => {
    let word = e;
    arr.forEach((e2) => {
      if (word.includes(e2)) {
        word = word.replaceAll(e2, "X");
      }
    })
    if ([...word].filter((e) => e !== "X").length === 0) {
      answer++;
    }
  })
  return answer;
}