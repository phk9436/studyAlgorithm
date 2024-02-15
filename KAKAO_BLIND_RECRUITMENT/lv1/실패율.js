function solution(N, stages) {
  let fails = Array(N + 1).fill(0);
  let totalPlayers = stages.length;

  stages.forEach((e) => {
    if (e <= N) {
      fails[e]++;
    }
  })

  for (let i = 1; i <= N; i++) {
    const players = fails[i];
    fails[i] = players / totalPlayers;
    totalPlayers -= players;
  }

  const answer = fails
    .map((e, i) => ({ stage: i, fail: e }))
    .slice(1)
    .sort((a, b) => b.fail - a.fail || a.stage - b.stage);
  return answer.map(e => e.stage);
}