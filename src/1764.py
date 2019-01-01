# from collections import defaultdict
# d, b = map(int, input().split())
# ds = [input() for i in range(d)]
# bs = [input() for i in range(b)]
# dict = defaultdict(int)
# for i in [*ds, *bs]:
#     dict[i] += 1
# res = []
# for key in dict.keys():
#     if dict[key] == 2:
#         res.append(key)
# res.sort()
# print(len(res))
# print(*res, sep='\n')

def binarySearch(li, s, e, target):
    if s > e:
        return False

    mid = (s + e) // 2
    if li[mid] == target:
        return True
    elif li[mid] < target:
        return binarySearch(li, mid + 1, e, target)
    elif li[mid] > target:
        return binarySearch(li, s, mid - 1, target)

d, b = map(int, input().split())
ds = sorted([input() for i in range(d)])
bs = sorted([input() for i in range(b)])

res = []
for a in ds:
    if binarySearch(bs, 0, len(bs) - 1, a):
        res.append(a)

print(len(res))
print(*res, sep='\n')

