def merge(a, b):
    result=[]
    while len(a)>0 or len(b)>0:
        if len(a)>0 and len(b)>0:
            if a[0]<b[0]:
                result += [a[0]]
                a=a[1:]
            else:
                result += [b[0]]
                b=b[1:]
        elif len(a) > 0:
            result += [a[0]]
            a=a[1:]
        elif len(b) > 0:
            result += [b[0]]
            b=b[1:]
    return result            

def merge_sort(arr):
    if len(arr)<=1: return arr
    mid=len(arr)//2
    leftArr=arr[:mid]
    rightArr=arr[mid:]
    leftArr=merge_sort(leftArr)
    rightArr=merge_sort(rightArr)
    return merge(leftArr, rightArr)

import sys
input=sys.stdin.readline
n=int(input())
arr=[int(input()) for i in range(n)]
arr = merge_sort(arr)
for v in arr: print(v)