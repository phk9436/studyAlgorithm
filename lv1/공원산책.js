function solution(park, routes) {
  const rot = routes.map((e) => e.split(" "));
  const pak = park.map((e) => e.split(""))
  let place = [0, 0]; //y, x
  pak.some((e, i) => {
    if (e.includes("S")) {
      place[0] = i;
      place[1] = e.indexOf("S")
      return true;
    }
  })
  rot.forEach((e) => {
    const X = pak[place[0]].indexOf("X");
    const LastX = pak[place[0]].lastIndexOf("X");
    if (e[0] === 'E') {
      const move = place[1] + Number(e[1]); //오른쪽으로 이동
      let isStop = false;
      if (move >= pak[0].length) {
        return;
      }
      for (let i = place[1]; i <= move; i++) {
        if (pak[place[0]][i] === 'X') {
          isStop = true;
          break;
        }
      }
      if (isStop) {
        return;
      }
      place[1] += Number(e[1])
    }
    if (e[0] === 'S') {
      const move = place[0] + Number(e[1]); //아래로 이동
      let isStop = false;
      if (move >= pak.length) {
        return;
      }
      for (let i = place[0]; i <= move; i++) {
        if (pak[i][place[1]] === 'X') {
          isStop = true;
          break;
        }
      }
      if (isStop) {
        return;
      }
      place[0] += Number(e[1])
    }
    if (e[0] === 'W') {
      const move = place[1] - Number(e[1]); //왼쪽으로 이동
      let isStop = false;
      if (move < 0) {
        return;
      }
      for (let i = place[1]; i >= move; i--) {
        if (pak[place[0]][i] === 'X') {
          isStop = true;
          break;
        }
      }
      if (isStop) {
        return;
      }
      place[1] -= Number(e[1])
    }
    if (e[0] === "N") {
      const move = place[0] - Number(e[1]); //위로 이동
      let isStop = false;
      if (move < 0) {
        return;
      }
      for (let i = place[0]; i >= move; i--) {
        if (pak[i][place[1]] === 'X') {
          isStop = true;
          break;
        }
      }
      if (isStop) {
        return;
      }
      place[0] -= Number(e[1])
    }
  })
  return place;
}