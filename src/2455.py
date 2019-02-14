cnt=0
x=0
for i in range(4):
    a, b = map(int, input().split())
    cnt = cnt - a + b
    if x < cnt: x = cnt
print(x)

# code golf
# cnt=0
# res=[]
# for x in [list(map(int,input().split()))for i in range(4)]:
#     cnt = cnt - x[0] + x[1]
#     res.append(cnt)
# print(max(res))