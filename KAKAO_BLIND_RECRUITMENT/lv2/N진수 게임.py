def jin(n, base):
    T = "0123456789ABCDEF"
    q, r = divmod(n, base)
    if q == 0:
        return T[r]
    else:
        return jin(q, base) + T[r]

def solution(n, t, m, p):
    max = t * m
    p = p - 1
    answer = ""
    l = ""
    i = 0
    while len(l) < max:
      l += str(jin(i, n))
      i += 1
    for idx, j in enumerate(l):
      if len(answer) >= t:
        break
      if idx%m == p:
        answer += j.upper()
    return answer