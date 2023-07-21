def solution(sizes):
    arr1 = []
    arr2 = []
    for sizeIndex, sizeEl in enumerate(sizes):
      sizeEl.sort()
      arr1.append(sizeEl[0])
      arr2.append(sizeEl[1])
    return max(arr1) * max(arr2)