def solution(seoul):
    for key in enumerate(seoul):
      if key[1] == 'Kim':
        answer = key[0]
    return "김서방은 "+str(answer)+"에 있다"