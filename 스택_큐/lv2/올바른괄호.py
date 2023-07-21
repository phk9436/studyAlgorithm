def solution(s):
  answer=True
  isTrue = 0
  if len(s)== 0 or s[0] ==")":
    return False
  for l in s:
    if l == "(":
      isTrue+=1
    else:
      if isTrue > 0:
        isTrue-=1
  if isTrue!=0:
    answer = False
  return answer