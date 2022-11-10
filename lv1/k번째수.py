def solution(array, commands):
    arr = []
    for i, j, k in commands:
      slicedArr = array[i - 1: j]
      slicedArr.sort()
      arr.append(slicedArr[k - 1])
    answer = arr
    return answer