def fact(x): return x*fact(x-1) if x > 1 else 1
n=int(input())
a=str(fact(n))
s=0
for v in a[::-1]:
    if v == "0":
        s+=1
    else:
        break
print(s)
