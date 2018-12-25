# n = int(input())
# for i in range(1, 10):
#     print("{} * {} = {}".format(n, i, n*i))
#
# n = int(input())
# for i in range(n):
#     print("*" * (i + 1))

# for i in range(int(input())):print('*'*-~i)


# def d(num):
#     return num + sum(map(int, list(str(num))))
#
# arr = []
# for i in range(1, 10001):
#     arr.append(d(i))
# for i in range(1, 10001):
#     if i not in arr:
#         print(i)
#
# def isHansoo(num):
#     if num < 100: return True   # 99 이하는 모두 한수
#     arr = list(map(int, list(str(num))))
#     diff = arr[1] - arr[0]
#     for i, _ in enumerate(arr[:-1]):
#         if arr[i + 1] - arr[i] != diff:
#             return False
#     return True
#
# print(sum([isHansoo(i) for i in range(1, int(input()) + 1)]))

# n = int(input())
# for i in range(n):
#     print(" " *(n--~i)+"*"*-~i)

# i=int(input());exec('print("*"*i);i-=1;'*i)

# n=int(input())
# for i in range(n):
#     print(" "*i+"*"*(n-i))

# print(sum(i+1for i in range(int(input())))

# input();print(sum(map(int, input())))

# import math
# str=input()
# for i in range(math.ceil(len(str)/10)):
#     print(str[i*10:((i+1)*10)])

# from sys import stdin, stdout
# input = stdin.readline
# print = stdout.write
# for i in range(int(input())):
#     a, b = list(map(int, input().split()))
#     print(str(a+b)+"\n")
# dateOfMonth=[31,28,31,30,31,30,31,31,30,31,30,31]
# day=["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
#
# def getDateFrom070101(month, date):
#     return sum(dateOfMonth[:month-1]) + date - 1
#
# m, d = map(int, input().split())
# # print(day[getDateFrom070101(m, d) % 7])
#
# print("SMTWTFSUOUEHRANNEDUIT"[(int("0033614625035"[m])+d)%7::7])

# [(int("0033614625035"[m])+d)%7::7]

from sys import stdin, stdout
input=stdin.readline
print=stdout.write
while 1:
    i = input()
    if i == "\n": break
    print(i)











