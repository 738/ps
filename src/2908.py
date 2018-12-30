a, b = input().split()
s=lambda y: int("".join(reversed(y)))
print(max(s(a), s(b)))
