function hcf(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / hcf(a, b);
}

console.log(`HCF: ${hcf(12, 18)}`);
console.log(`LCM: ${lcm(12, 18)}`);
