def solution(a, b, n):
    i = 0
    while n >= a:
      i += (n // a) * b
      n = (n // a) * b + (n % a)
    return i