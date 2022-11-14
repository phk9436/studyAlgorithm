import itertools
import math

def solution(nums):
  ncr = list(itertools.combinations(nums, 3))
  arr = []
  for index, i in enumerate(ncr):
    arr.append(True)
    for n in range(2, int(math.sqrt(sum(i))) + 1):
      if sum(i)%n == 0:
        arr[index] = False
  answer = 0
  for i in arr:
    if i == True:
      answer += 1
  
  return answer