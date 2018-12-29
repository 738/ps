# 10845. 큐
# 20181229

from sys import stdin
input = stdin.readline

class Queue:

    def __init__(self):
        self.arr = []

    def push(self, num):
        self.arr.append(num)

    def pop(self):
        if self.empty(): return -1
        target = self.front()
        self.arr.remove(self.front())
        return target

    def size(self):
        return len(self.arr)

    def empty(self):
        return int(len(self.arr) == 0)

    def front(self):
        return self.arr[0] if not self.empty() else -1

    def back(self):
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
        elif com == 'front':
            return self.front()
        elif com == 'back':
            return self.back()
        else:
            return

n = int(input())
s = Queue()

for i in range(n):
    data = input().split()
    if len(data) == 2:
        com, num = data
        s.command(com, int(num))
    elif len(data) == 1:
        com = data[0]
        print(s.command(com, None))

