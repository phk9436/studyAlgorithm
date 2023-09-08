function solution(s) {
  var answer = 0;
  let i = 0; //시작점
  let iLen = 2; //문자열의 길이
  while (i < s.length) {
    const w1 = s.slice(i, i + iLen);
    const w2 = [...w1].filter((e) => e === s[i]).length;
    if (w2 === iLen / 2) {
      i += iLen;
      answer++;
      iLen = 2;
    } else {
      iLen += 2;
    }
  }
  return answer;
}