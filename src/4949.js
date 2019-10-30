let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
n.forEach(s=>{
  if (s==='.') return;
  let stack = [];
  let flag = true;
  for (let i=0; i<s.length; i++) {
    if (s[i] === '(') {
      stack.push('(');
    }
    else if (s[i] === '[') {
      stack.push('[');
    }
    else if (s[i] === ')') {
      if (stack.length === 0 || stack[stack.length - 1] !== '(') {
        flag = false;
        break;
      }
      stack.pop();
    }
    else if (s[i] === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== '[') {
        flag = false;
        break;
      }
      stack.pop();
    }
  }
  if (stack.length !== 0) flag = false;
  console.log(flag?'yes':'no');
});
