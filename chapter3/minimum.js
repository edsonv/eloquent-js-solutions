let min = (a = process.argv[2] || 12, b = process.argv[3] || 5) => {
  let prom = (a + b) / 2;
  let d = b - a;

  if (d < 0) {
    d = -d;
  }

  return prom - (d / 2)
}

console.log(min())