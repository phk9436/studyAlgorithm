function solution(keyinput, board) {
  var answer = [0, 0];
  keyinput.forEach((e) => {
    if (e === "left" && answer[0] > Math.ceil(-(board[0] / 2))) {
      answer[0] = answer[0] - 1;
      return;
    }
    if (e === "right" && answer[0] < Math.floor(board[0] / 2)) {
      answer[0] = answer[0] + 1;
      return;
    }
    if (e === "up" && answer[1] < Math.floor(board[1] / 2)) {
      answer[1] = answer[1] + 1;
      return;
    }
    if (e === "down" && answer[1] > Math.ceil(-(board[1] / 2))) {
      answer[1] = answer[1] - 1;
      return;
    }
  });
  return answer;
}