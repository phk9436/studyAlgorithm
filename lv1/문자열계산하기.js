function solution(my_string) {
  var answer = 0;
  const arr = my_string.split(" ");
  answer = Number(arr[0])
  arr.forEach((e, i) => {
    if (i === 0) return;
    if (isNaN(Number(e))) {
      if (e === "+") {
        answer += Number(arr[i + 1])
      } else {
        answer -= Number(arr[i + 1])
      }
    }
  })
  return answer;
}