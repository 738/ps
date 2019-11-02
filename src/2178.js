n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = n.shift().split` `.map(v=>+v);
let miro = Array.from(Array(N), () => n.shift().split``.map(v=>+v));
visited = Array.from(Array(N), () => Array(M).fill(false));
const DIR = [[0,1],[1,0],[0,-1],[-1,0]];
const START = [0, 0];
const END = [N-1, M-1];
q=[];
q.push(START);
visited[0][0] = true;
while(q.length) {
    let curNode = q.shift();
    for (let i = 0; i < 4; i++) {
        let nextNode = [curNode[0] + DIR[i][0], curNode[1] + DIR[i][1]];
        if (nextNode[0] >= 0 && nextNode[1] >= 0 && nextNode[0] < N && nextNode[1] < M) {
            if (miro[nextNode[0]][nextNode[1]] === 1 && visited[nextNode[0]][nextNode[1]] === false) {
                visited[nextNode[0]][nextNode[1]] = true;
                if (JSON.stringify(nextNode) !== JSON.stringify(END)) q.push(nextNode);
                miro[nextNode[0]][nextNode[1]] = miro[curNode[0]][curNode[1]] + 1;
            }
        }
    }
}
console.log(miro[N-1][M-1]);
