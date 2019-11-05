let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [N,M]=n.shift().split(' ').map(v=>+v)
let [r,c,d]=n.shift().split(' ').map(v=>+v)
let graph=[]
let visited=Array.from(Array(N), ()=>Array(M).fill(0))
for (let i=0; i<N; i++) {
  graph.push(n.shift().split(' ').map(v=>+v))
}
let DIR=[[-1,0],[0,1],[1,0],[0,-1]]
function getLeftDir(curDir) {
  return curDir > 0 ? curDir-1 : DIR.length-1
}
function getPostDir(curDir) {
  return curDir > 1 ? curDir-2 : curDir+2
}
function getAllCleaned(y, x) {
  return DIR.every(v => graph[y+v[0]][x+v[1]]===1 || visited[y+v[0]][x+v[1]] || !isValid(y+v[0], x+v[1]))
}
function isValid(y, x) {
  return y>=0 && x>=0 && y<N && x<M && graph[y][x] === 0
}
let cnt=0;
function clean(y, x, dir) {
  if (!visited[y][x]) {
    visited[y][x]=1
    cnt++;
  }
  let leftY=y+DIR[getLeftDir(dir)][0], leftX=x+DIR[getLeftDir(dir)][1]
  let postY=y+DIR[getPostDir(dir)][0]
  let postX=x+DIR[getPostDir(dir)][1]
  if (getAllCleaned(y, x) && !isValid(postY, postX)) {
    return
  } else if (getAllCleaned(y, x) && isValid(postY, postX)) {
    clean(postY, postX, dir)
    return
  } else if (isValid(leftY, leftX) && !visited[leftY][leftX]) {
    clean(leftY, leftX, getLeftDir(dir))
  } else if (isValid(leftY, leftX) && visited[leftY][leftX]) {
    clean(y, x, getLeftDir(dir))
  } else {
    // 모든방향이 청소되어있지않고 왼쪽방향이 벽이다
    clean(y, x, getLeftDir(dir))
  }
}
clean(r, c, d)
console.log(cnt)
