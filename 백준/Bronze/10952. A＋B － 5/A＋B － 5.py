import sys
A = 1
B = 1
while A + B >= 1:
    A, B = map(int, sys.stdin.readline().split())
    if A + B >= 1:
        print(A + B)
    else:
        break
