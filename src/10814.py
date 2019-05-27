n=int(input())
users = []
for i in range(n):
    new_user = input().split()
    new_user[0] = int(new_user[0])
    new_user += [i]
    users += [new_user]
users.sort(key=lambda x: (x[0], x[2]))
for i in range(n):
    print(users[i][0], users[i][1])
    