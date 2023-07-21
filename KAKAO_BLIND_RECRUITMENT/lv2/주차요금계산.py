from collections import deque, defaultdict
import math

def solution(fees, records):
  answer = []
  arr = []
  cars = defaultdict(list)
  for i in records:
    j = i.split()
    k = j[0].split(':')
    time = int(k[0]) * 60 + int(k[1])
    arr.append([time, j[1], j[2]])
  dq = deque(arr)
  while dq:
    record = dq.popleft()
    if record[2] == 'IN':
      if record[1] not in cars:
        cars[record[1]] = [int(record[0]), 0]
      else:
        cars[record[1]][0] = int(record[0])
    elif record[2] == 'OUT':
      cars[record[1]][1] += int(record[0]) - cars[record[1]][0]
      cars[record[1]][0] = 0
  for key, value in cars.items():
    if value[0] != 0:
      cars[key][1] += (23*60 + 59) - value[0]
    elif value[0] == 0 and value[1] == 0:
      cars[key][1] += (23*60 + 59) - value[0]
  cars2 = sorted(cars.items())
  for i in cars2:
    answer.append(fees[1] + math.ceil((i[1][1] - fees[0])/fees[2]) * fees[3])
  for idx, i in enumerate(answer):
    if i < fees[1]:
      answer[idx] = fees[1]
  return answer