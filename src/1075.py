# N, F, res =input(), int(input()), 0
# for i in range(int(N[:-2]+"00"), int(N[:-2]+"99") + 1):
#     if i % F == 0:
#         print(res if res > 9 else "0" + str(res))
#         break
#     res += 1

# code golf
N,F,res=input(),int(input()),0;print(str(list(filter(lambda x:x%F==0,[i for i in range(int(N[:-2]+"00"),int(N[:-2]+"99")+1)]))[0])[-2:])
