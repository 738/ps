function abbreviate(str) {
  return str.replace(/(\w)(\w{2,})(\w)/g, function (_, a, b, c) {
    return a + b.length + c
  });
}
