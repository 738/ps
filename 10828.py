# 10828. 스택
# 20181225

from sys import stdin
input = stdin.readline

class Stack:

    def __init__(self):
        self.arr = []

    def push(self, num):
        self.arr.append(num)

    def pop(self):
        return self.arr.pop() if not self.empty() else -1

    def size(self):
        return len(self.arr)

    def empty(self):
        return int(len(self.arr) == 0)

    def top(self):
        return self.arr[len(self.arr) - 1] if not self.empty() else -1

    def command(self, com, num):
        if com == 'push':
            return self.push(num)
        elif com == 'pop':
            return self.pop()
        elif com == 'size':
            return self.size()
        elif com == 'empty':
            return self.empty()
        elif com == 'top':
            return self.top()
        else:
            return

n = int(input())
s = Stack()

for i in range(n):
    data = input().split()
    if len(data) == 2:
        com, num = data
        s.command(com, int(num))
    elif len(data) == 1:
        com = data[0]
        print(s.command(com, None))

