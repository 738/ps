n=int(input())
m=[tuple(map(int,input().split()))for i in range(n)]
m.sort(key=lambda x:(x[0],x[1]))
[print(*m[i]) for i in range(n)]