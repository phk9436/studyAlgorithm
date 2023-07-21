import math

def jin(n, q):
    rev_base = ''

    while n > 0:
        n, mod = divmod(n, q)
        rev_base += str(mod)

    return rev_base[::-1] 

def isprime(x):
    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            return False
    return True

def solution(n, k):
    num = jin(n, k).split('0')
    answer = 0
    for i in num:
      if i == '':
        continue
      if int(i) == 1:
        continue
      if isprime(int(i)) == True:
        answer += 1
    return answer