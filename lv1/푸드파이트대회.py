def solution(food):
  del food[0]
  dir = {}
  for index, n in enumerate(food):
    if n//2 != 0:
      dir[index + 1] = n//2
  arr = []
  for key, val in dir.items():
    n = 0
    while n < val:
      arr.append(str(key))
      n += 1
  arr2 = list(reversed(arr))
  answer = "".join(arr) + "0" + "".join(arr2)
  return answer
