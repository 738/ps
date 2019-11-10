let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.shift()
let A=n.shift().split(' ').map(v=>+v)
n.shift()
let B=n.shift().split(' ').map(v=>+v)
A.sort((a,b)=>a-b)
B.forEach(v=>{
  if (binarySearch(A, v) !== -1) console.log(1)
  else console.log(0)
})

function binarySearch(arr, target) {
  let low=0
  let high=arr.length-1
  let mid
  while (low<=high) {
    mid=Math.floor((low+high)/2)
    if (arr[mid] > target) {
      high=mid-1
    } else if (arr[mid] < target) {
      low=mid+1
    } else {
      return mid
    }
  }
  return -1
}
