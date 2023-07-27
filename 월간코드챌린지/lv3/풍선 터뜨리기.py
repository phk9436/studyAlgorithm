from collections import deque

def solution(a):
    answer = 2
    dq = deque(a)
    cur = dq.popleft()
    idx = 1
    lft = cur
    rgt = [dq.pop()]
    b = a[-2::-1]
    for i in b:
      if i < rgt[-1]:
        rgt.append(i)
      else:
        rgt.append(rgt[-1])
    rgt.reverse()
    while dq:
      cur = dq.popleft()
      if lft > cur or rgt[idx + 1] > cur:
        answer += 1
      if lft > cur:
        lft = cur
      idx += 1
    return answer