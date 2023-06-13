from collections import deque

mbti = {
  'R': 0,
  'T': 0,
  'C': 0,
  'F': 0,
  'J': 0,
  'M': 0,
  'A': 0,
  'N': 0
}

def solution(survey, choices):
    arr = [list(i) for i in survey]
    dq = deque(arr)
    i = 0
    while dq:
      da, a = dq.popleft()
      if choices[i] == 4:
        i += 1
        continue
      if choices[i] < 4:
        mbti[da] += 4 - choices[i]
      if choices[i] > 4:
        mbti[a] += choices[i] - 4
      i += 1
    answer = ''
    if mbti['R'] >= mbti['T']:
      answer += 'R'
    elif mbti['R'] < mbti['T']:
      answer += 'T'
    if mbti['C'] >= mbti['F']:
      answer += 'C'
    elif mbti['C'] < mbti['F']:
      answer += 'F'
    if mbti['J'] >= mbti['M']:
      answer += 'J'
    elif mbti['J'] < mbti['M']:
      answer += 'M'
    if mbti['A'] >= mbti['N']:
      answer += 'A'
    elif mbti['A'] < mbti['N']:
      answer += 'N'
    return answer