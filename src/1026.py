n=int(input())

A = list(map(int, input().split()))
B = list(map(int, input().split()))

A.sort()
B.sort(reverse=True)

print(sum(map(lambda v: v[0]*v[1], zip(A, B))))
