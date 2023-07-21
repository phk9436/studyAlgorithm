from collections import deque

def checkValid(s):
  if s[0] == ')' or s[0] == ']' or s[0] == '}':
    return False
  dq = deque(s)
  stack = []
  while dq:
    chd = dq.popleft()
    if chd == ')':
      if len(stack) == 0:
        return False
      elif stack[-1] == '(':
        stack.pop()
    elif chd == '(': 
      stack.append(chd)
    if chd == ']':
      if len(stack) == 0:
        return False
      elif stack[-1] == '[':
        stack.pop()
    elif chd == '[':
      stack.append(chd)
    if chd == '}': 
      if len(stack) == 0:
        return False
      elif stack[-1] == '{':
        stack.pop()
    elif chd == '{':
      stack.append(chd)
  if stack:
    return False
  else:
    return True
  
def solution(s):
    arr = []
    for i in range(len(s)):
      arr.append(''.join([s[i:],s[0:i]]))
    arr2 = []
    for i in arr:
      arr2.append(checkValid(i))
    answer = 0
    for i in arr2:
      if i == True:
        answer += 1
    return answer