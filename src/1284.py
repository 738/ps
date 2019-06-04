n=[4,2,*[3]*8]
while 1:
    s=input()
    if s=="0": break
    print(sum([n[int(v)]for v in s])+len(s)+1)