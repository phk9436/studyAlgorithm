import math

def solution(n):
  arr = [True] * (n + 1)
  arr[0] = False
  arr[1] = False

  for i in range(2, int(math.sqrt(n) + 1)):
    if arr[i] == True:
      j = 2
      while (i * j) <= n:
        arr[i*j] = False
        j += 1
  answer = 0
  
  for i in arr:
    if i == True:
      answer += 1

  return answer

#에라토스테네스의 체를 이용