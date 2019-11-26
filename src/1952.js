// 왜 런타임 에러 나는지 

let [M,N]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v);
const DIR=[[0,1],[1,0],[0,-1],[-1,0]];
let arr=Array.from(Array(M), ()=>Array(N).fill(0));
let currentDir=0;
function nextDir(currentDir) {
  return currentDir===3?0:currentDir+1;
}
let cnt=0;
let result=0;
let curY=0;
let curX=0;
arr[0][0]=1;
while(1) {
  if (cnt === M*N-1) break;
  const newY=curY+DIR[currentDir][0];
  const newX=curX+DIR[currentDir][1];
  if (newY < M && newX < N && newY >= 0 && newX >= 0) {
    if (arr[newY][newX] !== 0) {
      currentDir=nextDir(currentDir);
      result ++;
    } else {
      curY=newY;
      curX=newX;
      arr[newY][newX]=1;
      cnt ++;
    }
  } else {
    currentDir=nextDir(currentDir);
    result ++;
  }
}
console.log(result);
