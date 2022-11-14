import math

def solution(nums):
  numSet = set(nums)
  lenN = math.ceil(len(nums) / 2)
  return min(lenN, len(numSet))