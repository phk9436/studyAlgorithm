def solution(numbers):
    arr = []
    for index, el in enumerate(numbers):
      for n in range(index, len(numbers)):
        if index != n:
          sum = numbers[index] + numbers[n]
          arr.append(sum)
    arrSet = list(set(arr))
    arrSet.sort()
    return arrSet
