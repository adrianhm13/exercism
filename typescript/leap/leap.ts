function isDivisible(year: number, number: number) {
  return year % number === 0;
}

export function isLeap(year: number) {
  if (!isDivisible(year, 4)) return false;

  if (isDivisible(year, 100) && !isDivisible(year, 400)) return false;

  return true;
}
