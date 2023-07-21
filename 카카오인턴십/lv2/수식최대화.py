import re
import itertools
from collections import deque

def solution(expression):
    answer = []
    arr = re.split('([^0-9])', expression)
    susik = ['+', '-', '*']
    susikArr = deque(itertools.permutations(susik, 3))
    while susikArr:
      i = deque(susikArr.popleft())
      arr2 = arr.copy()
      while i:
        d = i.popleft()
        res = 0
        while d in arr2:
          for index, el in enumerate(arr2):
            if el == d:
              if d == '+':
                res = int(arr2[index - 1]) + int(arr2[index + 1])
                del arr2[index - 1]
                del arr2[index - 1]
                del arr2[index - 1]
                arr2.insert(index - 1, res)
                break
              elif d == '-':
                res = int(arr2[index - 1]) - int(arr2[index + 1])
                del arr2[index - 1]
                del arr2[index - 1]
                del arr2[index - 1]
                arr2.insert(index - 1, res)
                break
              elif d == '*':
                res = int(arr2[index - 1]) * int(arr2[index + 1])
                del arr2[index - 1]
                del arr2[index - 1]
                del arr2[index - 1]
                arr2.insert(index - 1, res)
                break
      answer.append(abs(arr2[0]))
    return max(answer)