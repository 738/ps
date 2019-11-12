let [plaintext,key]=require('fs').readFileSync('dev/stdin').toString().split('\n')
let result=''
for (let i=0; i<plaintext.length; i++) {
  if (plaintext[i]!==' ') result+=encrypt(plaintext[i], key[i%key.length])
  else result+=' '
}
console.log(result);
function encrypt(char, key) {
  let code=char.charCodeAt() - (key.charCodeAt()-96)
  if (code<97) code+=26
  return String.fromCharCode(code)
}
