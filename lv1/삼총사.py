from itertools import combinations

def solution(number):
    answer = 0
    combArr = list(combinations(number, 3))
    for n in combArr:
      if sum(n) == 0:
        answer += 1
    return answer