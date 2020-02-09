let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [curHour, curMin] = n.shift().split(' ').map(v=>+v);
let minToAdd = +n.shift();
let hourToAdd = Math.floor(minToAdd / 60);
minToAdd = minToAdd % 60;
if (curMin + minToAdd >= 60) {
  curHour ++;
  curMin = curMin + minToAdd - 60;
} else {
  curMin += minToAdd;
}
if (curHour + hourToAdd >= 24) {
  curHour = (curHour + hourToAdd) % 24;
} else {
  curHour = curHour + hourToAdd;
}
console.log(curHour + ' ' + curMin);
