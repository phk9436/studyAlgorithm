from collections import deque

def solution(cacheSize, cities):
    answer = 5
    que = deque()
    que.append(cities[0].upper())
    q = 1
    while q <= len(cities) - 1:
      if cacheSize == 0:
        answer = len(cities) * 5
        break
      if cities[q].upper() in que:
        que.remove(cities[q].upper())
        que.append(cities[q].upper())
        answer += 1
        q += 1
        continue
      if len(que) >= cacheSize:
        que.popleft()
      que.append(cities[q].upper())
      answer += 5
      q += 1
          
    return answer