def solution(dartResult):
  resArr = []
  scoreArr = []
  idx = 0
  numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  for index, n in enumerate(dartResult[:]):
    if n in numArr:
      resArr.append([n])
      if index != 0:
        if n == "0" and '1' in resArr[idx]:
          del resArr[idx]
          resArr[idx] = ['10']
        else:
          idx += 1
    else:
      resArr[idx].append(n)
  for index, n in enumerate(resArr):
    if "*" not in n and "#" not in n:
      resArr[index].append(" ")
    if n[0] in numArr:
      scoreArr.append(int(n[0]))
    if n[1] == 'D':
      scoreArr[index] = scoreArr[index] ** 2
    if n[1] == 'T':
      scoreArr[index] = scoreArr[index] ** 3
    if n[2] == '*':
      if index != 0:
        scoreArr[index - 1] = scoreArr[index - 1] * 2
      scoreArr[index] = scoreArr[index] * 2
    if n[2] =="#":
      scoreArr[index] = scoreArr[index] * -1
  return int(sum(scoreArr))