def solution(s):
    lt = len(s)
    if lt%2 == 0:
      answer = s[lt//2 - 1:lt//2 + 1]
    else:
      answer = s[lt//2]
    return answer