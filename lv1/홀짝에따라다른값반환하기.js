const func1 = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i += 2) {
        res += i;
    }
    return res;
}

const func2 = (n) => {
    let res = 0;
    for (let i = 2; i <= n; i += 2) {
        res += Math.pow(i, 2);
    }
    return res;
}

function solution(n) {
    var answer = 0;
    if (n % 2 === 0) {
        answer = func2(n);
    } else {
        answer = func1(n);
    }
    return answer;
}