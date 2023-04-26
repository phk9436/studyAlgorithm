def solution(citations):
    arr = []
    for h in range(0, len(citations) + 1):
      count = 0
      count2 = 0
      for el in citations:
        if el >= h:
          count += 1
        else:
          count2 += 1
      if count >= h and count2 <= h:
        arr.append(h)
    return max(arr)