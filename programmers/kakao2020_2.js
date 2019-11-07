function solution(p) {
    if (p === '' || isOl(p)) return p
    return getOl(p)
}
function getOl(w) {
    if (w === '') return w;
    let idx=-1
    let u='', v=''
    for (let i=2; i<=w.length; i++) {
        u=w.substring(0, i)
        v=w.substring(i)
        if (isGyoon(u) && isGyoon(v)) {
            break
        }
    }
    console.log(u, v);
    if (isOl(u)) {
        return u + getOl(v)
    } else {
        return '(' + getOl(v) +')' + flip(u.substring(1, u.length - 1))
    }
}
function isGyoon(str) {
    let leftCount=str.split('').filter(v=>v==='(').length
    return 2*leftCount === str.length;
}
function isOl(str) {
    let stack=[]
    str.split('').forEach(v=>{
        if (v==='(') stack.push('(')
        else stack.pop()
    })
    return stack.length === 0
}
function flip(str) {
    return str.split('').map(v=>v==='('?')':'(').join('')
}
