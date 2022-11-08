def solution(d, budget):
    d.sort()
    acc = 0
    answer = 0
    for cur in d:
      acc += cur
      if acc <= budget:
        answer += 1
    return answer