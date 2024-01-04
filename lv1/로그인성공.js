function solution(id_pw, db) {
  var answer = '';
  db.some(([id, pw], i) => {
    if (id_pw[0] === id && id_pw[1] === pw) {
      answer = "login";
      return true;
    }
    if (id_pw[0] === id) {
      answer = "wrong pw";
    }
    if (i + 1 === db.length && answer === '') {
      answer = "fail";
    }
  })
  return answer;
}