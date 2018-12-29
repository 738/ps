nums=list(map(int, input().split()))
isStairs = True
for i in range(1, 8):
    if abs(nums[i] - nums[i-1]) != 1:
        isStairs = False
        break

if isStairs:
    print("ascending" if nums[0] == 1 else "descending")
else:
    print("mixed")