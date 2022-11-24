def solution(participant, completion):
    dir = {}
    for n in participant:
      if n not in dir:
        dir[n] = 1
      else:
        dir[n] = dir[n] + 1
    for n in completion:
      dir[n] = dir[n] - 1
    for n in dir.items():
      if n[1] != 0:
        answer = n[0]
    return answer
