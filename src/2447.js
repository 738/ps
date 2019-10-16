N=+require('fs').readFileSync('dev/stdin').toString();

arr=Array.from(Array(N), () => Array(N).fill(0));

function sol(n, x, y) {
  if (n === 1) {
    arr[x][y] = 1;
    return;
  }
  let m = n / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue;
      sol(m, m*i + x, m*j + y);
    }
  }
  return;
}

sol(N, 0, 0);

let result = '';
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1) result += '*';
    else result += ' ';
  }
  result += '\n';
}
console.log(result);
