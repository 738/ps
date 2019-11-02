n=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v);
function gcd(a, b) {
    if (a < b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    let r = -1;
    while (b != 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}
function lcd(a, b) {
    return (a*b)/gcd(a,b);
}
let min = Number.POSITIVE_INFINITY;
for (let i=0; i<3; i++) {
    for (let j=i+1; j<4;j++) {
        for (let k=j+1; k<5; k++) {
            let l = lcd(lcd(n[i], n[j]), n[k])
            if (min > l) min = l;
        }
    }
}
console.log(min);
