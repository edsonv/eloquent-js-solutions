let rowsToPrint = process.argv[2] || 7

const hash = '#'

let row = hash

for (let i = 0; i < rowsToPrint; i++) {
  console.log(row)
  row += hash
}