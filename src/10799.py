s=input()
sticks=[]
sum = 0
isLazer = False
for i in range(len(s)):
    if isLazer:
        isLazer = False
        continue
    if s[i:i+2] == "()":
        isLazer = True
        sticks = [j + 1 for j in sticks]
    elif s[i] == "(":
        sticks.append(1)
    elif s[i] == ")":
        sum += sticks.pop(0)
print(sum)
        
# Example
# ()(((()())(())()))(())
# 17
# (((()(()()))(())()))(()())
# 24
