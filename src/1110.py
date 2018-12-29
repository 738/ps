s = input()

def rightString(s):
    return s[-1] if len(s) > 1 else s

def nextString(s):
    return rightString(s) + rightString(str(sum(map(int, s))))

nS = nextString(s)
cnt = 1
while int(nS) != int(s):
    nS = nextString(nS)
    cnt += 1

print(cnt)