zero = 0
def izin(s):
  global zero
  letter = []
  for i in s:
    if i == '1':
      letter.append(i)
    if i == '0':
      zero += 1
  return str(bin(len(letter))[2:])
def solution(s):
    global zero
    tryN = 0
    while s != '1':
      s = izin(s)
      tryN += 1
    return [tryN, zero]