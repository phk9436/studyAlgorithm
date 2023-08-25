function solution(k, score) {
  var answer = [];
  let arr = []
  score.forEach((e) => {
      if(arr.length < k) {
          arr.push(e);
          arr = arr.sort((a, b) => a - b);
      } else {
          if(e > arr[0]) {
              arr.shift();
              arr.push(e)
              arr = arr.sort((a, b) => a - b);
          }
      }
      answer.push(arr[0])
  })
  return answer;
}