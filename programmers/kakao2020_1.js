function solution(s) {
    let min = s.length;
    for (let i=1; i<=s.length/2; i++) {
        let zipLen = zip(s, i).length;
        if (min > zipLen) min = zipLen;
    }
    return min;
}
function zip(s, n) {
    let arr = [];
    for (let i=0; i<Math.floor(s.length); i+=n) {
        arr.push(s.substring(i, i+n));
    }
    let tmp = '';
    let cnt = 1;
    let result = [];
    for (let i=0; i<arr.length; i++) {
        if (tmp !== arr[i]) {
            if (cnt !== 1) {
                result.push(cnt + tmp);
                cnt = 1;
            } else {
                if (tmp !== '') result.push(tmp);
            }
            tmp = arr[i];
        } else {
            cnt ++;
        }
    }
    result.push((cnt > 1 ? cnt : '') + tmp);
    return result.join``;
}
