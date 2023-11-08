function solution(players, callings) {
  const map1 = new Map();
  const map2 = new Map();
  players.forEach((e, i) => {
    map1.set(e, i);
    map2.set(i, e);
  })

  callings.forEach((e) => {
    let playerNum = map1.get(e);
    let loserName = map2.get(playerNum - 1);
    map1.set(e, playerNum - 1);
    map1.set(loserName, playerNum);
    map2.set(playerNum - 1, e);
    map2.set(playerNum, loserName);
  })
  let answer = [];
  for (let val of map2.values()) {
    answer.push(val)
  }
  return answer;
}