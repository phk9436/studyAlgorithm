from collections import deque

def solution(queue1, queue2):
    answer = -1
    result = (sum(queue1 + queue2)) / 2
    if int(result) != result:
      return -1
    dq1 = deque(queue1)
    dq2 = deque(queue2)
    sum1 = sum(list(dq1))
    sum2 = sum(list(dq2))
    tryN = 0
    while tryN <= len(queue1) * 3:
      if sum1 > sum2:
        cur = dq1.popleft()
        dq2.append(cur)
        sum2 += cur
        sum1 -= cur
      elif sum1 < sum2:
        cur = dq2.popleft()
        dq1.append(cur)
        sum1 += cur
        sum2 -= cur
      else:
        answer = tryN
        break
      tryN += 1
    if sum1 == result:
      return answer
    else:
      return -1