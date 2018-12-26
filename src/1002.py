import math
from sys import stdin, stdout
input = stdin.readline
print = stdout.write

n = int(input())

for i in range(n):
    x1, y1, r1, x2, y2, r2 = map(int, input().split())
    distanceBetweenTurret = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    if distanceBetweenTurret == 0 and r1 == r2:
        print("-1\n")
    elif distanceBetweenTurret == 0 or r1 + r2 < distanceBetweenTurret or abs(r2 - r1) > distanceBetweenTurret:
        print("0\n")
    elif r1 + r2 == distanceBetweenTurret or abs(r2 - r1) == distanceBetweenTurret:
        print("1\n")
    else:
        print("2\n")