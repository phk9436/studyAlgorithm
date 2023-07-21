from collections import deque
from itertools import product
import math

def solution(users, emoticons):

  sales = list(product([10, 20, 30, 40], repeat = len(emoticons)))
  temp = [[0 for e in range(len(users))] for i in range(len(sales))]
  i = 0
  sldeq = deque(sales)
  while sldeq:
    sale = sldeq.popleft()
    usdeq = deque(users)
    i2 = 0
    while usdeq:
      ussl, uspr = usdeq.popleft()
      for idx, el in enumerate(emoticons):
        if sale[idx] >= ussl:
          temp[i][i2] += el - (el * sale[idx] / 100)
      i2 += 1
    for idx, e in enumerate(temp[i]):
      if e >= users[idx][1]:
        temp[i][idx] = True
    i += 1
  arr = []
  for i in temp:
    if True in i:
      arr.append(i)
  if len(arr) == 0:
    tmpst = sorted(temp, key=lambda x: (sum(x)))
    return [0,math.ceil(sum(tmpst[-1]))]
  arr.sort(key=lambda x: (x.count(True), sum(x)))
  answer = [arr[-1].count(True), 0]
  for i in arr[-1]:
    if i != True:
      answer[1] += i
  return answer