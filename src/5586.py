s=input()
joi, ioi = 0, 0
for i in range(len(s)-2):
    if s[i:i+3] == 'JOI':
        joi += 1
    elif s[i:i+3] == 'IOI':
        ioi += 1
print(joi, ioi, sep='\n')