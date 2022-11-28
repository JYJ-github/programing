T = int(input())
x = 1
while T > 0:
    T = T - 1
    a,b = input().split()
    print("Case #{0}: ".format(x) + str(a) + " + " + str(b) + " = "+ str(int(a) + int(b)))
    x = x + 1