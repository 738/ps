let birds=+require('fs').readFileSync('dev/stdin').toString().trim();
let count=1;
let result=0;
while (birds > 0) {
  if (birds < count) {
    count = 1;
    continue;
  } else {
    birds -= count;
    count++;
    result++;
  }
}
console.log(result);
