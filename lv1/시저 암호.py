def solution(s, n):
    answer = ''
    for str in s.split(" "):
      answer+=" "
      for i in str:
        lower = i.lower()
        nextord = ord(lower) + n
        if nextord > 122:
          remainder = nextord - 122
          nextord = 96 + remainder
        if i.isupper():
          answer += chr(nextord).upper()
        else:
          answer += chr(nextord)
    return answer[1:]