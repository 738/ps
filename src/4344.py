# 4344. 평균은 넘겠지
# 20181229

n=int(input())

def float3(s):
    res=s
    if len(res.split(".")[1]) >= 3:
        return res
    else:
        while len(res.split(".")[1]) < 3:
            res += "0"
        return res

for i in range(n):
    ins = list(map(int, input().split()))
    avg = sum(ins[1:])/ins[0]
    ratio = len(list(filter(lambda x: x > avg, ins[1:]))) / ins[0] * 100;
    print(float3(str(round(ratio, 3))) + "%")