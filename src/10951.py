from sys import stdin, stdout
input = stdin.readline
print = stdout.write

while True:
    s=input().strip()
    if not s: break
    print(str(sum(map(int, s.split())))+"\n")
