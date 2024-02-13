function solution(numer1, denom1, numer2, denom2) {
  const commonDeno = denom1 * denom2;
  const newNumer1 = numer1 * denom2;
  const newNumer2 = numer2 * denom1;

  const sumNumer = newNumer1 + newNumer2;

  const gcd = findGCD(sumNumer, commonDeno);

  const simplifiedNumer = sumNumer / gcd;
  const simplifiedDeno = commonDeno / gcd;

  return [simplifiedNumer, simplifiedDeno];
}

function findGCD(a, b) {
  if (b === 0) {
      return a;
  }
  return findGCD(b, a % b);
}