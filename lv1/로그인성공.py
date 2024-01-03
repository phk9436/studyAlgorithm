def solution(id_pw, db):
    isloged = False
    for i in db:
        if i[0] == id_pw[0]:
            if i[1] == id_pw[1]:
                answer = 'login'
            else:
                answer = 'wrong pw'
            isloged = True
            break
    if isloged == False:
        answer = 'fail'
    return answer