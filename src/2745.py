get_num=lambda c: ord(c)-55 if c.isalpha() else int(c)
n,b=input().split()
print(sum([get_num(n[i])*int(b)**(len(n)-i-1) for i in range(len(n))]))
