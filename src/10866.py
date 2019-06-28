class Deque:
    def __init__(self):
        self.arr = []
    def push_front(self, v):
        self.arr.insert(0, v)
    def push_back(self, v):
        self.arr.append(v)
    def empty(self):
        return 1 if len(self.arr) == 0 else 0
    def pop_front(self):
        if self.empty(): return -1
        return self.arr.pop(0)
    def pop_back(self):
        if self.empty(): return -1
        return self.arr.pop()
    def front(self):
        if self.empty(): return -1
        return self.arr[0]
    def back(self):
        if self.empty(): return -1
        return self.arr[-1]
    def size(self):
        return len(self.arr)

n=int(input())
d=Deque()
for i in range(n):
    words = input().split()
    if len(words) == 1:
        print(getattr(d, words[0])())
    else:
        getattr(d, words[0])(words[1])
