s=input()
res = ""
for v in s:
    if v.isalpha():
        if v.isupper():
            if v <= "M":
                res += (chr(ord(v) + 13))
            else:
                res += (chr(ord(v) - 13))
        else:
            if v <= "m":
                res += (chr(ord(v) + 13))
            else:
                res += (chr(ord(v) - 13))
    else:
        res += v
print(res)
