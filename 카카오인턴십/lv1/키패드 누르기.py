def solution(numbers, hand):
  L = 10
  R = 12
  answer = ''
  for index, n in enumerate(numbers):
    if n == 0:
      numbers[index] = 11
  for n in numbers:
    if n == 1 or n == 4 or n == 7:
      answer += 'L'
      L = n
    elif n == 3 or n == 6 or n == 9:
      answer += 'R'
      R = n
    else:
      lootL = abs(n - L) // 3 + abs(n - L) % 3
      lootR = abs(n - R) // 3 + abs(n - R) % 3
      if lootL < lootR:
        answer += 'L'
        L = n
      elif lootL > lootR:
        answer += 'R'
        R = n
      elif hand == "left":
        answer += 'L'
        L = n
      else:
        answer += 'R'
        R = n

  return answer
