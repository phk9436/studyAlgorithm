def solution(n, lost, reserve):
  lost.sort()
  reserve.sort()
  setlost = list(set(lost) - set(reserve))
  setreserve = list(set(reserve) - set(lost))
  matchedArr1 = []
  matchedArr2 = []
  for el in setlost:
    if el - 1 in setreserve:
      matchedArr1.append(el - 1)
    if el + 1 in setreserve:
      matchedArr2.append(el + 1)
  matchedArr3 = set(matchedArr1 + matchedArr2)
  islost = len(setlost) - len(matchedArr3)
  if islost < 0:
    islost = 0
  return n - islost