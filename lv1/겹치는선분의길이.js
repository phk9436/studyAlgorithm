function solution(lines) {
  var answer = 0;

  //첫번째와 두번쨰 비교
  const line1S = [lines[0][0], lines[1][0]].sort((a, b) => a - b)[1];
  const line1E = [lines[0][1], lines[1][1]].sort((a, b) => a - b)[0];
  if (line1E > line1S) {
    answer += line1E - line1S;
  }
  //첫번째와 세번째 비교
  const line2S = [lines[0][0], lines[2][0]].sort((a, b) => a - b)[1];
  const line2E = [lines[0][1], lines[2][1]].sort((a, b) => a - b)[0];
  if (line2E > line2S) {
    answer += line2E - line2S;
  }
  //두번째와 세번째 비교
  const line3S = [lines[1][0], lines[2][0]].sort((a, b) => a - b)[1];
  const line3E = [lines[1][1], lines[2][1]].sort((a, b) => a - b)[0];
  if (line3E > line3S) {
    answer += line3E - line3S;
  }
  //다 겹치는 것 비교
  const line4S = [lines[0][0], lines[1][0], lines[2][0]].sort((a, b) => a - b)[2];
  const line4E = [lines[0][1], lines[1][1], lines[2][1]].sort((a, b) => a - b)[0];
  if (line4E > line4S) {
    answer -= (line4E - line4S) * 2;
  }
  return answer;
}