n=int(input())

for i in range(n):
    s=input()
    Circles = s.split("X")
    scores = sum(map(lambda x: len(x) * (len(x) + 1) // 2, Circles))
    print(scores)