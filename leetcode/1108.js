const defangIPaddr = (address) => address.split``.map(v=>v==='.'?'[.]':v).join``

// regexp 사용
// const defangIPaddr = (address) => address.replace(/\./g, '[.]')
