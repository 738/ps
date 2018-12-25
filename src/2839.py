# 2839. 설탕 배달
# 181225

import sys
sys.setrecursionlimit(2000)

arr = [0] * 5001

# 점화식: D(n) = min(D(n-3), D(n-5)) + 1
def dp(num):
    if num in [3, 5]:
        return 1
    elif num in [1, 2, 4]:
        return -1
    elif arr[num] != 0:
        return arr[num]

    a = dp(num-3)
    b = dp(num-5)
    if a == -1 and b == -1:
        arr[num] = -1
    elif a == -1:
        arr[num] = b + 1
    elif b == -1:
        arr[num] = a + 1
    else:
        arr[num] = min(a, b) + 1
    return arr[num]

n = int(input())
print(dp(n))
