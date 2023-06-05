from collections import deque, defaultdict

def solution(record):
    answer = []
    arr = []
    users = defaultdict(list)
    for i in record:
      arr.append(i.split())
    dq = deque(arr)
    while dq:
      i = dq.popleft()
      if i[0] == 'Enter' or i[0] == 'Change':
        if i[2]:
          users[i[1]] = i[2]

    dq = deque(arr)
    while dq:
      i = dq.popleft()
      if i[0] == 'Enter':
        answer.append(users[i[1]] + '님이 들어왔습니다.')
      elif i[0] == 'Leave':
        answer.append(users[i[1]] + '님이 나갔습니다.')
    return answer