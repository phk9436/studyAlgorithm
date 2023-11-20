function solution(phone_number) {
  const arr = [...phone_number]
  const arrMap = arr.map((e, i) => {
    if (i < phone_number.length - 4) return "*"
    return e
  });
  return arrMap.join("");
}