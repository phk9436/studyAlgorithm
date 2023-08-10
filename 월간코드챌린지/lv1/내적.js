function solution(a, b) {
    var answer = 0;
    a.forEach((e, i) => {
        const num = e*b[i]
        answer+=num
    })
    return answer;
}