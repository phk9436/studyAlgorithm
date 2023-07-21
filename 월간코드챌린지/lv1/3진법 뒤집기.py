def solution(n):
    m = ""
    while n:
      base = divmod(n, 3)
      m += str(base[1])
      n = base[0]
    answer = int(m, 3)
    return answer