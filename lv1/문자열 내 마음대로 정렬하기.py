def solution(strings, n):
    answer = []
    dir = {}
    for index, el in enumerate(strings):
      if ord(el[n]) not in dir:
        dir[ord(el[n])] = [el]
      else:
        dir[ord(el[n])].append(el)
    dirArr = sorted(dir.items())
    for el in dirArr:
      el[1].sort()
      answer.append(el[1])
    return sum(answer, [])