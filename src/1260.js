let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [N, M, V] = n.shift().split(' ').map(v=>+v);
let arr = Array.from(Array(N+1), () => Array(N+1).fill(0));
let visited = Array(N+1).fill(false);
while (n.length) {
  let [a, b] = n.shift().split(' ').map(v=>+v);
  arr[a][b] = 1;
  arr[b][a] = 1;
}
let dfs = [];
function DFS(idx) {
  dfs.push(idx)
  for (let i = 1; i <= N; i++) {
    if (arr[idx][i] && !visited[i]) {
      visited[i] = true;
      DFS(i)
    }
  }
}

visited[V] = true;
DFS(V);
console.log(dfs.join` `);

visited = visited.map(() => false);
let queue = [];
let bfs = [];
function BFS(idx) {
  visited[idx] = true;
  queue.push(idx);
  while(queue.length) {
    idx = queue.shift();
    bfs.push(idx);
    for (let i = 1; i <= N; i++) {
      if (arr[idx][i] && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }  
}

BFS(V);
console.log(bfs.join(` `));
