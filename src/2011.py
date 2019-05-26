n=input()
if n.startswith("0"): print(0)
elif len(n) == 1: print(1 if n[0] != "0" else 0)
else:
    sec = 0
    if n[:2] in ["10", "20"]:
        sec = 1
    elif n[1] == "0":
        sec = 0
    elif int(n[:2]) <= 26:
        sec = 2
    else:
        sec = 1
    d=[1, sec]
    for i in range(2, len(n)):
        p = int(n[i])
        s = 0
        if p > 0:
            s += d[i-1]
        q = int(n[i-1:i+1])
        if q >= 10 and q <= 26:
            s += d[i-2]
        d+=[s % 1000000]
    print(d[-1])

# 0 -> 0
# 00 -> 0
# 100 -> 0
# 300 -> 0
# 303 -> 0
# 503 -> 0
# 25114 -> 6
# 25 -> 2
# 10 -> 1
# 20 -> 1
# 30 -> 0
# 40 -> 0
# 101 -> 1
# 1101 -> 1
# 110 -> 1
# 2200 -> 0