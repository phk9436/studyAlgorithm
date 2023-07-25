import itertools
zero = 0
one = 0

def valid(n):
  global zero
  global one
  if n == 0:
    zero += 1
  elif n == 1:
    one += 1
    
def quad(arr):
  if len(set(list(itertools.chain(*arr)))) == 1:
    valid(list(set(list(itertools.chain(*arr))))[0])
    return
  arrLen = int(len(arr[0]) / 2)
  if arrLen == 1:
    for i in list(itertools.chain(*arr)):
      valid(i)
    return
  arr1 = [i[0:arrLen] for i in arr[0:arrLen]]
  arr2 = [i[arrLen:] for i in arr[0:arrLen]]
  arr3 = [i[0:arrLen] for i in arr[arrLen:]]
  arr4 = [i[arrLen:] for i in arr[arrLen:]]
  zip1 = set(list(itertools.chain(*arr1)))
  zip2 = set(list(itertools.chain(*arr2)))
  zip3 = set(list(itertools.chain(*arr3)))
  zip4 = set(list(itertools.chain(*arr4)))
  if len(zip1) == 1:
    valid(list(zip1)[0])
  else:
    quad(arr1)
  if len(zip2) == 1:
    valid(list(zip2)[0])
  else:
    quad(arr2)
  if len(zip3) == 1:
    valid(list(zip3)[0])
  else:
    quad(arr3)
  if len(zip4) == 1:
    valid(list(zip4)[0])
  else:
    quad(arr4)

def solution(arr):
  global zero
  global one
  quad(arr)
  return [zero, one]