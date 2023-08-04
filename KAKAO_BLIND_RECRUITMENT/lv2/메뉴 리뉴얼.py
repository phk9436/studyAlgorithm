from collections import deque, Counter
from itertools import combinations

def solution(orders, course):
    answer = []
    for count in course:
      arr = []
      dq = deque(orders)
      while dq:
        cur = sorted(dq.popleft())
        arr2 = list(combinations(cur, count))
        arr += arr2
      counter = Counter(arr)
      if len(counter) == 0:
        continue
      maxC = max(counter.values())
      if maxC > 1:
        for i in counter:
          if counter[i] == maxC:
            answer.append("".join(i))
      arr2 = []
    
    return sorted(answer)