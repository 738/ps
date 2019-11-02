let n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [N, M] = n.shift().split(' ').map(v => +v);
let lab = Array(N).fill();
for (let i = 0; i < N; i++) {
    lab[i] = n.shift().split(' ').map(v => +v);
}
let tmpLab;
let q = [];
let max = 0;
const DIR = [[0, 1], [1, 0], [0, -1], [-1, 0]];
let virus = [];

function resetTmpLab() {
    tmpLab = Array.from(Array(N), () => Array(M).fill(0));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            tmpLab[i][j] = lab[i][j];
        }
    }
}
resetTmpLab();
function bfs_virus() {
    q = [];
    q.push(...virus);
    let labAfterMakingWall = Array.from(Array(N), () => Array(M).fill(0));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            labAfterMakingWall[i][j] = tmpLab[i][j];
        }
    }
    while (q.length) {
        let point = q.shift();
        for (let i = 0; i < 4; i++) {
            let newX = point[0] + DIR[i][0];
            let newY = point[1] + DIR[i][1];
            if (newX >= 0 && newY >= 0 && newX < N && newY < M) {
                if (labAfterMakingWall[newX][newY] === 0) {
                    labAfterMakingWall[newX][newY] = 2;
                    q.push([newX, newY]);
                }
            }
        }
    }
    let safe = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (labAfterMakingWall[i][j] === 0) {
                safe++;
            }
        }
    }
    if (max < safe) {
        max = safe;
    }
}

function makeWall(count) {
    if (count === 3) {
        bfs_virus();
        return;
    } else {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (tmpLab[i][j] === 0) {
                    tmpLab[i][j] = 1;
                    makeWall(count+1);
                    tmpLab[i][j] = 0;
                }
            }
        }
    }
}
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (lab[i][j] === 2) {
            virus.push([i, j]);
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (tmpLab[i][j] === 0) {
            resetTmpLab();
            tmpLab[i][j] = 1;
            makeWall(1);
            tmpLab[i][j] = 0;
        }
    }
}

console.log(max);
