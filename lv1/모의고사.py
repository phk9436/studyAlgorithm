def solution(answers):
    answer = []
    stud1 = [1,2,3,4,5]
    stud2 = [2,1,2,3,2,4,2,5]
    stud3 = [3,3,1,1,2,2,4,4,5,5]
    score = [0, 0, 0]
    for index, ans in enumerate(answers):
      if ans == stud1[index % (len(stud1))]:
        score[0] += 1
      if ans == stud2[index % (len(stud2))]:
        score[1] += 1
      if ans == stud3[index % (len(stud3))]:
        score[2] += 1
    maxScore = max(score)
    for index, n in enumerate(score):
      if n == maxScore:
        answer.append(index + 1)
    return answer