fizzbuzz=n=>Array(n).fill().map((v,x,_,f='Fizz',b='Buzz')=>++x%15==0?f+b:x%3==0?f:x%5==0?b:x)
