import sys
from collections import deque
input=sys.stdin.readline
[n,k]=map(int,input().split())
q=deque([i+1 for i in range(n)])
print('<', end='')
for i in range(n):
    for _ in range(k-1):
        q.append(q.popleft())
    print(str(q.popleft()) + (', ' if i != n-1 else ''), end='')
print('>')
