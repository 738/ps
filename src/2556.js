n=+require('fs').readFileSync('dev/stdin').toString().trim()
console.log(Array.from(Array(n), () => '*'.repeat(n)).join`\n`)
