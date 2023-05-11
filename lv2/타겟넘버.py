def solution(numbers, target):
    answer = 0
    dp = [[numbers[0], numbers[0] * -1]]
    for i in range(0, len(numbers) - 1):
      arrset = []
      for x in dp[i]:
          arrset.append(x + numbers[i+1])
          arrset.append(x - numbers[i+1])
      dp.append(arrset)
    for i in dp[-1]:
      if i == target:
        answer+=1
    return answer