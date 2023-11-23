function solution(id_list, report, k) {
  var answer = Array(id_list.length).fill(0);
  let reported = Array(id_list.length).fill(0);
  const map = new Map()
  report.forEach((e) => {
    const arr = e.split(" ");
    const arr2 = map.get(arr[0]);
    if (typeof arr2 === 'undefined') {
      map.set(arr[0], [arr[1]])
    } else {
      const arr3 = [...arr2, arr[1]];
      const set = [...new Set(arr3)];
      map.set(arr[0], set)
    }
  })
  // console.log(map)
  for (let val of map) {
    val[1].forEach((e, i) => {
      reported[id_list.indexOf(e)]++;
    })
  }
  const del = reported.map((e) => {
    if (e >= k) {
      return Math.floor((e - 1) / k) + 1;
    }
    return 0;
  })
  for (let val of map) {
    // console.log(val, val[1].includes('frodo'))
    del.forEach((e, i) => {
      if (e === 0) return;
      if (val[1].includes(id_list[i])) {
        answer[id_list.indexOf(val[0])]++;
      }
    })
  }
  return answer;
}