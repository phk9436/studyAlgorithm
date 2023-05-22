import re

def solution(files):
    arr = []
    for i in files:
      arr.append(re.split("([0-9]+)", i, 1))
    arr.sort(key = lambda x: (x[0].upper(), int(x[1])))
    answer = []
    for i in arr:
      answer.append(''.join(i))
    return answer