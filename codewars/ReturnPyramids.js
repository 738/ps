// https://www.codewars.com/kata/return-pyramids/train/javascript
pyramid=n=>{
  res=[]
  for (i=1;i<=n;i++)res.push(`${" ".repeat(n-i)}/${(i--!=n?" ":"_").repeat(2*i++)}\\`);
  return res.join("\n") + "\n";
}
