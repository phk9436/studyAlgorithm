from collections import deque
import copy
import math

def bfs(graph, start, visited):
  queue = deque([start])
  visitedCopy = visited.copy()
  visitedCopy[start] = True
  while queue:
    v = queue.popleft()
    for i in graph[v]:
      if not visitedCopy[i]:
        queue.append(i)
        visitedCopy[i] = True
  return visitedCopy


def solution(n, wires):
  visited = [False] * (n + 1)
  dict = {}
  ans = []
  for i in range(1, n + 1):
    dict[i] = []
  for index, el in enumerate(wires):
    arr = wires.copy()
    dict2 = copy.deepcopy(dict)
    del arr[index]
    for e1, e2 in arr:
      dict2[e1].append(e2)
      dict2[e2].append(e1)
    graph = [[]]
    for i in dict2:
      graph.append(dict2[i])
    ret = bfs(graph, 1, visited)
    ans.append(ret.count(True))
  for index, e in enumerate(ans):
    ans[index] = abs(n/2 - e)
  ans1 = min(ans) + n/2
  ans2 = n - ans1
  return math.ceil(abs(ans1 - ans2))