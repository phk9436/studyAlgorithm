function solution(myString) {
  var answer = [...myString].map((e) => {
    if (e === "a") {
      return "A"
    }
    if (e !== "A") {
      return e.toLowerCase()
    }
    return e
  }).join("");
  return answer;
}