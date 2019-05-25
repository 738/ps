d=[*[1]*4,2,2]
exec("d+=[d[-1]+d[-5]];"*95+"print(d[int(input())]);"*int(input()))