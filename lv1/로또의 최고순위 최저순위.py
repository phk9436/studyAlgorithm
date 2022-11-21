def solution(lottos, win_nums):
    zero = lottos.count(0)
    intersection = list(set(lottos).intersection(win_nums))
    answer = [7 - len(intersection) - zero,7 - len(intersection)]
    for index, n in enumerate(answer):
      if n >= 6:
        answer[index] = 6
    return answer
