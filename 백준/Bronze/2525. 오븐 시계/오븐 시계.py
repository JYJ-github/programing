a, b = input().split()
c = input()

if int(b) + int(c) >= 60:
    a = int(a) + ((int(b) + int(c))//60)
    b = (int(b) + int(c)) % 60
    if a >= 24:
        a = a - 24
    print("{0} {1}".format(a, b))

else:
    b = int(b) + int(c)
    print("{0} {1}".format(a, b))

