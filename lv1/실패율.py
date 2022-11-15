def solution(N, stages):
  failDir = {}
  stage = 1
  while stage <= N:
    if stage in stages:
      if stage not in failDir:
        failDir[stage] = [1, len(stages)]
      else:
        failDir[stage][0] = failDir[stage][0] + 1
      stages.pop(0)
    else:
      if stage not in failDir:
        failDir[stage] = [0, len(stages)]
      stage += 1
  for n in failDir.items():
    if n[1][1] == 0:
      failDir[n[0]] = 0
    else:
      failDir[n[0]] = n[1][0]/n[1][1]
  failArr = sorted(failDir.items(), key = lambda x:x[1], reverse = True)
  answer = []
  for n, _ in failArr:
    answer.append(n)
  return answer
