
function solution(board) {
  if (board.length === 1) {
    if (board[0][0] === 0) return 1;
    return 0;
  }
  board.forEach((e, i) => {
    board[i].forEach((e2, i2) => {
      if (e2 === 1) {
        if (i !== 0) {
          //맨 위칸이 아닐 떄
          if (board[i - 1][i2] === 0) {
            board[i - 1][i2] = 2;
            //위칸
          }
          if (i2 !== 0 && board[i - 1][i2 - 1] === 0) {
            //맨 왼쪽이 아닐 때
            board[i - 1][i2 - 1] = 2;
            //왼쪽위
          }
          if (i2 !== board.length - 1 && board[i - 1][i2 + 1] === 0) {
            //맨 오른쪽이 아닐 때
            board[i - 1][i2 + 1] = 2;
            //오른쪽위
          }
        }
        if (i2 !== 0 && board[i][i2 - 1] === 0) {
          board[i][i2 - 1] = 2;
          //왼쪽
        }
        if (i2 !== board.length - 1 && board[i][i2 + 1] === 0) {
          board[i][i2 + 1] = 2;
          //오른쪽
        }
        if (i !== board.length - 1) {
          //맨 아래칸이 아닐 떄
          if (board[i + 1][i2] === 0) {
            board[i + 1][i2] = 2;
            //위칸
          }

          if (i2 !== 0 && board[i + 1][i2 - 1] === 0) {
            //맨 왼쪽이 아닐 때
            board[i + 1][i2 - 1] = 2;
            //왼쪽위
          }
          if (i2 !== board.length - 1 && board[i + 1][i2 + 1] === 0) {
            //맨 오른쪽이 아닐 때
            board[i + 1][i2 + 1] = 2;
            //오른쪽위
          }
        }
      }
    })
  })
  return board.flat().filter((e) => e === 0).length
}