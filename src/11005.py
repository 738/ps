def conv(n,b):
    t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    i,j=divmod(n,b)
    return t[j] if i == 0 else conv(i,b) + t[j]
n,b=map(int,input().split())
print(conv(n,b))
