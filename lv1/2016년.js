function solution(a, b) {
  const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const date = new Date(`2016-${a}-${b}`)
  return arr[date.getDay()];
}