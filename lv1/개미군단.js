function solution(hp) {
  let ant1 = Math.floor(hp / 5);
  let ant1Sq = hp % 5;
  let ant2 = 0, ant3 = 0;
  if (ant1Sq !== 0) ant2 = Math.floor(ant1Sq / 3)
  ant3 = ant1Sq % 3;
  return ant1 + ant2 + ant3;
}