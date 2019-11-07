// 정확성 14.4 틀림
function solution(n, build_frame) {
    let A=Array.from(Array(n), ()=>Array(n+1).fill(0))    // 기둥
    let B=Array.from(Array(n+1), ()=>Array(n).fill(0))    // 보
    for (let i=0; i<build_frame.length; i++) {
        let [x,y,a,b]=build_frame[i]
        // 기둥 설치
        if (a===0 && b===1) {
            // 밑이 바닥이거나 보 위에 설치 가능
            if (y===0 || B[y][x]===1 || (x>0 && B[y][x-1]===1))
                A[y][x]=1
            // 기둥 위에 설치 가능
            else if (y>0 && A[y-1][x]===1)
                A[y][x]=1
        }
        // 보 설치
        else if (a===1 && b===1) {
            // 바닥이 아니고 기둥 위에
            if (y!==0 || (y>0 && A[y-1][x]===1) || (y>0 && x<n && A[y-1][x+1]===1))
                B[y][x]=1
            // 그리고 보 양옆 끝 설치 가능
            else if ((x>0 && B[y][x-1]===1) && (x<n-1 && B[y][x+1]===1))
                B[y][x]=1
        }
        // 기둥 삭제
        else if (a===0 && b===0) {
            // 위에 기둥이 있고 그 기둥을 받치고 있는 보가 없다면 삭제 불가능
            if ((y<n-1 && A[y+1][x]===1) && (y<n-1 && x>1 && B[y+1][x-1]===0) && (y<n-1 && B[y+1][x]===0)) {
                
            }
            // 오른쪽에 보가 있고 그걸 받치고 있는 오른쪽 기둥이 없거나 오른쪽 보가 없다면 삭제 불가능
            else if ((y<n && B[y+1][x]===1) && (x<n && A[y][x+1]===0) && (y<n && x<n-1 && B[y+1][x+1]===0)) {
                
            }
            // 왼쪽에 보가 있고 그걸 받치고 있는 왼쪽 기둥이 없거나 왼쪽 보가 없다면 삭제 불가능
            else if ((y<n && x>0 && B[y+1][x-1]===1) && (x>1 && A[y][x-1]===0) && (y<n && x>1 && B[y+1][x-2]===0)) {
                
            }
            else {
                A[y][x]=0
            }
        }
        // 보 삭제
        else if (a===1 && b===0) {
            // 오른쪽에 보가 있고 그 보를 받치는 기둥이 없는 경우 삭제 불가능
            if ((x<n-1 && B[y][x+1]===1) && (y>0 && x<n && A[y-1][x+1]===0) && (y>0 && x<n-1 && A[y-1][x+2]===0)) {
                
            }
            // 왼쪽에 보가 있고 그 보를 받치는 기둥이 없는 경우 삭제 불가능
            else if ((x>0 && B[y][x-1]===1) && (y>0 && x>0 && A[y-1][x-1]===0) && (y>0 && x>1 && A[y-1][x-2]===0)) {
                
            }
            else {
                B[y][x]=0
            }
        }
    }
    let result=[]
    for (let i=0; i<A.length; i++) {
        for (let j=0; j<A[0].length; j++) {
            if (A[i][j]===1) result.push([j, i, 0])
        }
    }
    for (let i=0; i<B.length; i++) {
        for (let j=0; j<B[0].length; j++) {
            if (B[i][j]===1) result.push([j, i, 1])
        }
    }
    result.sort((a,b)=>{
        if (a[0]===b[0]) {
            if (a[1]===b[1]) return a[2]-b[2]
            return a[1]-b[1]
        }
        return a[0]-b[0]
    })
    return result
}
