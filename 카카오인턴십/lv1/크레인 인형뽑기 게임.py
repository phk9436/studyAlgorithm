def solution(board, moves):
    basket = []
    answer = 0
    for m in moves:
      for arr in board:
        if arr[m - 1] != 0:
          basket.append(arr[m - 1])
          arr[m - 1] = 0
          if len(basket) > 1 and basket[-1] == basket[-2]:
            del basket[-1]
            del basket[-1]
            answer += 2
          break
    return answer