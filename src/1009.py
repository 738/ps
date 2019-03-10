import sys
input = sys.stdin.readline

n=int(input())
for i in range(n):
    a, b = map(int, input().split())

    result_list = []
    tmp = 1
    for _ in range(b):
        tmp *= a
        tmp %= 10
        if tmp in result_list:
            break
        result_list.append(tmp)
    result = result_list[b%len(result_list)-1]
    print(result if result != 0 else 10)
