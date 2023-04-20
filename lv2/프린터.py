import string
import random

def solution(priorities, location):
  dir = {};
  resister = string.ascii_lowercase
  for i in priorities:
    dir[random.choice(resister)+random.choice(resister)+random.choice(resister)] = i
  arr = []
  arr2 = []
  for index, i in enumerate(dir.keys()):
    arr.append(i)
    if location == index:
      locateKey = i
  while len(arr) != 0:
    isMap = False
    isOver = False
    for index, i in enumerate(dir.values()):
      if dir[arr[0]] < i:
        arr.append(arr[0])
        arr.pop(0)
        isMap = True
        break
      elif index == len(arr) - 1:
        isOver = True
    if isMap == False and isOver == False:
      del dir[arr[0]]
      arr2.append(arr[0])
      arr.pop(0)
    elif isOver == True:
      for i in dir.values():
        if dir[arr[0]] == i:
          del dir[arr[0]]
          arr2.append(arr[0])
          arr.pop(0)
          break
  return arr2.index(locateKey) + 1