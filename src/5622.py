a='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
n='22233344455566677778889999'
print(sum([int(n[a.index(c)])+1for c in input()]))
