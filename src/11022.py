n=int(input())

for i in range(n):
    a, b = list(map(int, input().split()))
    print('Case #{}: {} + {} = {}'.format(i+1, a, b, a + b))
