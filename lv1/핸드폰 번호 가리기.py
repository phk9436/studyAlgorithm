import re

def solution(phone_number):
  length = len(phone_number)
  if length > 4 :
    answer = re.sub("[0-9]", "*", phone_number, length - 4)
  else :
    answer = phone_number
  return answer
