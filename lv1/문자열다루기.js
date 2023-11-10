function solution(s) {
  const reg = /\D/g;
  let istrue = false;
  if (!reg.test(s)) {
    if ([...s].length === 4 || [...s].length === 6) {
      istrue = true;
    }
  }
  return istrue;
}