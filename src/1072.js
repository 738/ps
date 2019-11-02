const [X, Y]=require('fs').readFileSync('dev/stdin').toString().trim().split` `.map(v=>+v);
let Z = Math.floor(100*Y/X);
let newZ = Z;
let cnt = 0;
if (X === Y || Z === 99) console.log(-1);
else { 
    while (newZ === Z) {
        cnt ++;
        newZ = Math.floor(100*(Y + cnt)/(X + cnt));
    }
    console.log(cnt);
}
