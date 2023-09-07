function solution(X, Y) {
  const arr1 = Array(10).fill(0)
  const arr2 = Array(10).fill(0)
  let arr3 = []

  X.split("").forEach((e) => arr1[e]++);
  Y.split("").forEach((e) => arr2[e]++);

  for (let i = 0; i < 10; i++) {
    const min = Math.min(arr1[i], arr2[i]);
    for (let j = 0; j < min; j++) {
      arr3.push(i)
    }
  }
  if (arr3.length === 0) return "-1"
  let arr4 = arr3.sort((a, b) => b - a);
  if (arr4[0] === 0) return "0";
  return `${arr4.join("")}`;
}