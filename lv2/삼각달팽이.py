import itertools

def solution(n):
    arr = [[] for i in range(n)]
    direct = 'bottom'
    num = 1
    bottomStart = 0
    bottomLeftStart = 0
    rightStart = n - 1
    rightLeftStart = 1
    topStart = 2
    topRightStart = 0
    while n >= 1:
      if direct == 'bottom':
        for i in range(bottomStart, bottomStart + n):
          arr[i].insert(bottomLeftStart, num)
          num += 1
        direct = 'right'
        bottomStart += 2
        bottomLeftStart += 1
        n -= 1
        continue
      if direct == 'right':
        for i in range(0, n):
          arr[rightStart].insert(rightLeftStart + i, num)
          num += 1
        direct = 'top'
        rightStart -= 1
        rightLeftStart += 1
        n -= 1
        continue
      if direct == 'top':
        for i in range(0, n):
          if topRightStart == 0:
            arr[-topStart - i].append(num)
          else:
            arr[-topStart - i].insert(-topRightStart, num)
          num += 1
        direct = 'bottom'
        topStart += 1
        topRightStart += 1
        n -= 1
        continue
    return list(itertools.chain(*arr))