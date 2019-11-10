let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [N,M]=n.shift().split(' ').map(v=>+v)
let trees=n.shift().split(' ').map(v=>+v)
trees.sort((a,b)=>a-b)
console.log(binarySearch(trees, M))

function binarySearch(arr, target) {
  let low=0
  let high=1000000000
  let mid
  while (low<=high) {
    mid=Math.floor((low+high)/2)
    if (getTreesToBring(trees, mid, M)) {
      low=mid+1
    } else {
      high=mid-1
    }
  }
  return high
}
function sum(arr) {
  return arr.reduce((t,v)=>t+v,0)
}
function getTreesToBring(arr, height, target) {
  let sum=0
  for (let i=0; i<arr.length; i++) {
    sum+=arr[i]>height?arr[i]-height:0
  }
  if (sum >= target) return true
  else return false
}
