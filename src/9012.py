n=int(input())
for i in range(n):
    a=input()
    stack=[]
    isVPS = True
    for j in a:
        if j == "(":
            stack.append(j)
        elif len(stack) == 0:
            isVPS = False
            break
        else:
            stack.pop()
    if not isVPS: print("NO")
    else: print("YES" if len(stack) == 0 else "NO")
