let numb = 1;
function solution(n) {
  for (let i = 2; i <= n; i++) {
    numb++;
    if ([...`${numb}`].includes('3') || numb % 3 === 0) {
      inc();
    }
  }
  return numb;
}

function inc() {
  numb++;
  if ([...`${numb}`].includes('3') || numb % 3 === 0) {
    inc();
  }
}