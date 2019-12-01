let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let nums=n.shift().split(' ').map(v=>+v)
let str=n.shift()
let dict={
  'abc': nums.indexOf(2)+1,
  'def': nums.indexOf(3)+1,
  'ghi': nums.indexOf(4)+1,
  'jkl': nums.indexOf(5)+1,
  'mno': nums.indexOf(6)+1,
  'pqrs': nums.indexOf(7)+1,
  'tuv': nums.indexOf(8)+1,
  'wxyz': nums.indexOf(9)+1,
}
function d() {
  let res=''
  for (let i=0; i<str.length; i++) {
    for (let key of Object.keys(dict)) {
      let index=key.indexOf(str[i])
      if (index !== -1) {
        if (res[res.length-1] == dict[key]) res += '#'
        res += (dict[key]+'').repeat(index+1)
      }
    }
  }
  return res
}
console.log(d())
