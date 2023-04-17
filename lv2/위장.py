def solution(clothes):
  answer = 0
  dir = {}
  for cloth, type in clothes:
    if type not in dir:
      dir[type] = 1
    else:
      dir[type] = dir[type] + 1
  arr = []
  for key in dir.keys():
    arr.append(dir[key])
  for i, e in enumerate(arr):
    sumEl = 0
    for el in arr[i:]:
      if sumEl == 0:
        sumEl += el
      else:
        sumEl += sumEl*el
    answer += sumEl
  return 