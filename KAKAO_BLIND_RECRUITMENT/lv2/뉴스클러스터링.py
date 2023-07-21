import math, collections

def solution(str1, str2):
    jakad = 0
    STR1 = str1.upper()
    STR2 = str2.upper()
    arr1 = []
    arr2 = []
    for i in range(0, len(STR1) - 1):
      el = ''.join([STR1[i], STR1[i + 1]])
      if el.isalpha():
        arr1.append(el)
    for i in range(0, len(STR2) - 1):
      el = ''.join([STR2[i], STR2[i + 1]])
      if el.isalpha():
        arr2.append(el)
    if len(arr1) == 0 and len(arr2) == 0:
      jakad = 1
    else:
      dir1 = collections.defaultdict(int)
      dir2 = collections.defaultdict(int)
      for i in arr1:
        dir1[i] += 1
      for i in arr2:
        dir2[i] += 1
      intsect = set(arr1).intersection(set(arr2))
      uni = set(arr1).union(set(arr2))
      interLen = 0
      uniLen = 0
      for i in intsect:
        interLen += min(dir1[i], dir2[i])
      for i in uni:
        uniLen += max(dir1[i], dir2[i])
      jakad = interLen/uniLen
    answer = math.trunc(jakad * 65536)
    return answer