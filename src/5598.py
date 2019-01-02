print(*map(lambda x:chr(ord(x)-3)if x>'C'else chr(ord(x)+23),input()),sep='')
