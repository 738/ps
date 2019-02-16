# DFS와 BFS
from collections import defaultdict, deque
N, M, V = map(int, input().split())
graph = defaultdict(set)
for i in range(M):
    a, b = map(int, input().split())
    graph[a].add(b)
    graph[b].add(a)

dfs_visited = defaultdict(bool)
dfs_way = []
def dfs(x):
    if dfs_visited[x]: return
    dfs_visited[x] = True
    dfs_way.append(x)
    for i in graph[x]:
        dfs(i)
dfs(V)

def bfs(start):
    queue = deque()
    visited = defaultdict(bool)
    queue.append(start)
    visited[start] = True
    res = []
    while queue:
        node = queue.popleft()
        res.append(node)
        for i in graph[node]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
    return res

print(*dfs_way)
print(*bfs(V))
