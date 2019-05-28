while True:
    try:
        s=input()
        a,b,c,d=0,0,0,0
        for v in s:
            if v.islower(): a+=1
            elif v.isupper(): b+=1
            elif v.isnumeric(): c+=1
            elif v == " " or v == "  ": d+=1
        print(a,b,c,d)
    except EOFError:
        break
