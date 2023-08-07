from itertools import combinations_with_replacement
from collections import deque

def solution(n, info):
    answer = [-1]
    shot = list(combinations_with_replacement(range(11), n))
    dq = deque(shot)
    maxGap = 0
    while dq:
      cur = dq.popleft()
      rion = 0
      apeach = 0
      shotList = [0 for i in range(11)]
      for i in cur:
        shotList[10 - i] += 1
      for idx, i in enumerate(shotList):
        if i > info[idx]:
          if i > 0:
            rion += (10 - idx)
        else:
          if info[idx] > 0:
            apeach += (10 - idx)
      if rion > apeach:
        gap = rion - apeach
        if gap > maxGap:
          maxGap = gap
          answer = shotList
    return answer