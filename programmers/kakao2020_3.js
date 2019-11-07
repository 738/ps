function solution(key, lock) {
    const N=key.length, M=lock.length
    const K=M+2*N-2
    let bigArr=Array.from(Array(K), ()=>Array(K).fill(-1))
    for (let i=0; i<M; i++) {
        for (let j=0; j<M; j++) {
            bigArr[N+i-1][N+j-1]=lock[i][j]
        }
    }
    let flag=false;
    for (let i=0; i<4; i++) {
        for (let j=0; j<=K-N; j++) {
            for (let k=0; k<=K-N; k++) {
                if (compareKeyAndLock(key, bigArr.slice(), j, k)) {
                    flag=true
                    break
                }
            }
            if (flag) break
        }
        if (flag) break
        key=rotate(key)
    }
    return flag
}
function compareKeyAndLock(key, bigArr, bigArrY, bigArrX) {
    let tmpBigArr=Array.from(Array(bigArr.length), (_,i)=>[...bigArr[i]])
    let flag=true
    for (let i=0; i<key.length; i++) {    
        flag=true
        for (let j=0; j<key.length; j++) {
            let point=tmpBigArr[bigArrY+i][bigArrX+j]
            if (point!==-1) {
                if ((point===0 && key[i][j]===1) || (point===1 && key[i][j]===0)) {
                    tmpBigArr[bigArrY+i][bigArrX+j]=1
                } else {
                    flag=false
                    break
                }
            }
        }
        if (!flag) break
    }
    let flagZero=false
    if (flag) {
        for (let i=0; i<tmpBigArr.length; i++) {
            for (let j=0; j<tmpBigArr.length; j++) {
                if (tmpBigArr[i][j]===0) {
                    flagZero=true
                    break
                }
            }
            if (flagZero) break
        }
    }
    return flag && !flagZero
}
function rotate(arr) {
    let n=arr.length
    let rotatedArr=Array.from(Array(n), ()=>Array(n))
    for (let i=0;i<n;i++)
        for (let j=0;j<n;j++)
            rotatedArr[i][j]=arr[n-j-1][i]
    return rotatedArr
}
