// Sum Strings as Numbers
// https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript
sumStrings=(a,b)=>{
  if (a.length<b.length) [a,b]=[b,a];
  a=a.split``.reverse``;
  b=b.split``.reverse``;
  res=[];
  carry=0;
  for (i=0;i<a.length;i++) {
    operand = b[i] || 0;
    addResult = addString(addString(a[i],operand), carry);
    res.push(addResult.slice(-1))
    if (addResult.length > 1) carry = 1;
    else carry = 0;
  }
  if (carry != 0) res.push(carry)
  res=res.reverse``;
  for (item of res) {
    if (item == '0') res.shift();
    else break;
  }
  return res.join``;
}

addString=(a,b)=>(a- -b)+''
