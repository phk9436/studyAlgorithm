function solution(myStr) {
  const a1 = myStr.split("a");
  const a2 = a1.map((e) => e.split("b")).flat().filter((e) => e !== '');
  const a3 = a2.map((e) => e.split("c")).flat().filter((e) => e !== '');
  if (!a3.length) return ["EMPTY"];
  return a3;
}