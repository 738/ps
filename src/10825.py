n=int(input())
students = []
for i in range(n):
    new_student = input().split()
    new_student[1:] = map(int, new_student[1:])
    students += [new_student]
students.sort(key=lambda x: (-x[1], x[2], -x[3], x[0]))
for i in range(n):
    print(students[i][0])