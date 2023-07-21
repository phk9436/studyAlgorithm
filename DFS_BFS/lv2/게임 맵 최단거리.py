from collections import deque

def solution(maps):
  answer = -1
  place = deque([[0, 0, 1]])
  xLen = len(maps[0]) - 1
  yLen = len(maps) - 1
  while len(place):
    y, x, i = place.popleft()
    
    if y == yLen and x == xLen:
      answer = i
      break

    if maps[y][x] == 0:
      continue
    maps[y][x] = 0

    if y + 1 < len(maps):
      place.append([y + 1, x, i + 1])
    if x + 1 < len(maps[0]):
      place.append([y, x + 1, i + 1])
    if y - 1 >= 0:
      place.append([y - 1, x, i + 1])
    if x - 1 >= 0:
      place.append([y, x - 1, i + 1])
  return answer