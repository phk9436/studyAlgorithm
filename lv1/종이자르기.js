function solution(M, N) {
  const cutM = M - 1;
  const cutN = (N - 1) * M;
  return cutM + cutN;
}