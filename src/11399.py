# n=int(input())
# people = list(map(int, input().split()))
# people.sort()
# sumOfTime = 0
# for i in range(n):
#     sumOfTime += sum(people[0:i+1])
# print(sumOfTime)

n=int(input());p=sorted(list(map(int,input().split())));print(sum(sum(p[0:i+1])for i in range(n)))
