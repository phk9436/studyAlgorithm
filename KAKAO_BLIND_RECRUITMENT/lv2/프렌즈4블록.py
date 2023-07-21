from collections import deque

def solution(m, n, board):
    answer = 0
    arr = [list(i) for i in board]
    while True:
      dq = deque(arr)
      i = 0
      delArr = []
      while dq and i + 1 < len(board):
        j = dq.popleft()
        for idx, el in enumerate(j):
          if idx + 1 >= len(j):
            break
          if el == '':
            continue
          if arr[i][idx + 1] == el and arr[i + 1][idx] == el and arr[i + 1][idx + 1] == el:
            delArr.append((i, idx))
            delArr.append((i + 1, idx))
            delArr.append((i + 1, idx + 1))
            delArr.append((i, idx + 1))
        i += 1
      delArr = list(set(delArr))
      if len(delArr) == 0:
        break
      answer += len(delArr)
      deldq = deque(delArr)
      while deldq:
        k = deldq.popleft()
        arr[k[0]][k[1]] = ''
      i = len(arr) - 2
      while i >= 0:
        for idx, el in enumerate(arr[i]):
          if el == '':
            continue
          j = i
          while j + 1 < len(arr):
            if arr[j + 1][idx] != '':
              break
            arr[j + 1][idx] = el
            arr[j][idx] = ''
            j += 1
        i -= 1
      
    return answer