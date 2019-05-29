import sys
input=sys.stdin.readline

def countTwo(n):
    two=0
    for i in range(2,n+1,2):
        two += n//i
    return two
    
def countFive(n):
    five=0
    i=5
    while i <= n:
        five += n//i
        i *= 5
    return five

n,m=map(int, input().split())
print(min(countTwo(n)-countTwo(m)-countTwo(n-m), countFive(n)-countFive(m)-countFive(n-m)))

# def f(n):
#     two,five=0,0
#     for i in range(2,n+1,2):
#         two += n // i
#     for i in range(5,n+1,5):
#         five += n // i
#     return two,five
# import sys
# input=sys.stdin.readline
# n,m=map(int,input().split())
# print(min(f(n)[0] - f(m)[0] - f(n-m)[0], f(n)[1] - f(m)[1] - f(n-m)[1]))