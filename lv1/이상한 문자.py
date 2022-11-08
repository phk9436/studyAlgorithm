def solution(s):
    answer = ''
    for n in s.split(" "):
      answer+= " "
      for i in enumerate(n):
        if i[0] % 2 == 1:
          answer += i[1].lower()
        else:
          answer += i[1].upper()
  
    return answer[1:]